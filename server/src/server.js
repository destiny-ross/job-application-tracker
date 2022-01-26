import "dotenv/config";
import https from "https";
import fs from "fs";
import express from "express";
import config from "./config.js";
import { errorHandler } from "./middleware/errorHandler.js";
import documentationMiddleware from "./documentation.js";
import authRouter from "./api/v1/auth/routes.js";
import connect from "./middleware/db.js";
import cookieSession from "cookie-session";
import morgan from "morgan";
import { globalMiddleware } from "./middleware/globals.js";
import { ErrorTypes } from "./utils/error/errorTypes.js";
import { CustomError } from "./utils/error/customError.js";
import { requireAuth } from "./middleware/requireAuth.js";

// config object key destructuring
const { PORT } = config;

const app = express();

globalMiddleware(app);
documentationMiddleware(app);

// routes
app.use("/api/v1/auth", authRouter);
app.get("/test", requireAuth, (req, res) => {
  res.send({ msg: "User is authed" });
});

app.use("*", (req, res, next) => {
  return next(new CustomError(ErrorTypes.RESOURCE_NOT_FOUND));
});

app.use(errorHandler);

const start = async () => {
  await connect(app);
  https
    .createServer(
      {
        key: fs.readFileSync("localhost+2-key.pem"),
        cert: fs.readFileSync("localhost+2.pem"),
      },
      app
    )
    .listen(PORT, function () {
      console.log(`Server listening on https://localhost:${PORT}`);
    });
};

export default start;
