import expressPinoLogger from "express-pino-logger";
import logger from "../logger.mjs";

const loggingMiddleware = expressPinoLogger({
  logger: logger,
  autoLogging: false,
});

export default loggingMiddleware;
