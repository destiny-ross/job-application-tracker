import { CustomError } from "../utils/error/customError.js";
import { createError } from "../utils/error/errorFactory.js";
import { formatError } from "../utils/error/formatError.js";
import { ErrorTypes } from "../utils/error/errorTypes.js";
import { sendResponse } from "../utils/responseHandler.js";

export function errorHandler(err, req, res, next) {
  const { analytics = {} } = err.meta || {};
  // logging for analytics
  console.log({ analytics });

  if (err instanceof CustomError) {
    const code = err.statusCode || 500;
    return res.status(code).send(formatError(err));
  }

  if (err instanceof Error) {
    const newError = createError(err);
    const code = newError.statusCode || 500;
    return res.status(code).send(formatError(newError));
  }

  const unknownError = new CustomError(ErrorTypes.UNKNOWN_ERROR);

  return sendResponse(res, unknownError, statusCode);
}
