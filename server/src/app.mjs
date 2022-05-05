import "dotenv/config";
import https from "https";
import fs from "fs";
import express from "express";
import loggingMiddleware from "./middleware/loggingMiddleware.mjs";
import logger from "./logger.mjs";
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.mjs";
import { ApplicationError } from "./utils/ApplicationError.mjs";
import { HTTPError } from "./utils/Errors.mjs";

const PORT = 4000;
const app = express();

app.use(express.json());

app.use("/test", (req, res) => {
  logger.info("Not found accessed");
  throw new ApplicationError(HTTPError.RESOURCE_NOT_FOUND);
});

app.use(loggingMiddleware);
app.use(errorHandlerMiddleware);

const start = () => {
  try {
    https
      .createServer(
        {
          key: fs.readFileSync("localhost+2-key.pem"),
          cert: fs.readFileSync("localhost+2.pem"),
        },
        app
      )
      .listen(PORT, function () {
        logger.info(`Server listening on https://localhost:${PORT}`);
      });

    process.on("uncaughtException", (err) => {
      logger.error(err);
      process.exit(1);
    });

    process.on("unhandledRejection", (err) => {
      logger.error(err);
      process.exit(1);
    });
  } catch (e) {
    console.log(e);
  }
};

export default start;
