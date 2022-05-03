import "dotenv/config";
import https from "https";
import fs from "fs";
import express from "express";
import loggingMiddleware from "./middleware/loggingMiddleware.mjs";
import logger from "./logger.mjs";

const PORT = 4000;
const app = express();

app.use(loggingMiddleware);
app.use(express.json());

app.use("/test", (req, res) => {
  logger.info("test route accessed");
  logger.error(new Error("Err"), "This is a test");
  return res.status(200).send({ msg: "hello" });
});

app.use(loggingMiddleware);

const start = async () => {
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
};

export default start;
