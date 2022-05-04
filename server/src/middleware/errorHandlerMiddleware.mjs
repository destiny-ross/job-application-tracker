import { sendResponse, formatError } from "../utils/sendResponse.mjs";
import { ApplicationError } from "../utils/ApplicationError.mjs";
import { createError } from "../utils/ErrorFactory.mjs";
import logger from "../logger.mjs";

const errorHandlerMiddleware = (err, req, res, next) => {
  logger.error(err);
  const { analytics = {} } = err.meta || {};
  // logging for analytics
  console.log({ analytics });

  if (err instanceof ApplicationError) {
    const code = err.statusCode || 500;
    return res.status(code).json(formatError(err));
  }

  if (err instanceof Error) {
    const newError = createError(err);
    const code = newError.statusCode || 500;
    return res.status(code).json(formatError(newError));
  }

  const unknownError = new ApplicationError(HTTPEr);

  return sendResponse(res, unknownError, statusCode);
};

export default errorHandlerMiddleware;
