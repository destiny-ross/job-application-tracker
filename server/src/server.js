import "dotenv/config";
import https from "https";
import fs from "fs";
import express from "express";
import cookieSession from "cookie-session";

import morgan from "morgan";
import config from "./config.js";
import { errorHandler } from "./middleware/errorHandler.js";
import documentationMiddleware from "./documentation.js";
import authRouter from "./api/v1/auth/routes.js";
import connect from "./middleware/db.js";

// config object key destructuring
const { PORT } = config;

const app = express();

// global middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== "test",
  })
);

connect(app);

documentationMiddleware(app);

// routes

app.use("/test", (req, res) => {
  res.send("test successful");
});

app.use("/api/v1/auth", authRouter);

app.use("*", (req, res) => {
  res.send({});
});

app.use(errorHandler);

const start = () => {
  https
    .createServer(
      {
        key: fs.readFileSync("localhost+2-key.pem"),
        cert: fs.readFileSync("localhost+2.pem"),
      },
      app
    )
    .listen(3000, function () {
      console.log("Server listening on https://localhost:3000/");
    });
};

export default start;
