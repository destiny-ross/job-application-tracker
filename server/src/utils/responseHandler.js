import { CustomError } from "./error/customError.js";
import { formatError } from "./error/formatError.js";

export function formatResponse(result, override = {}) {
  return {
    data: result,
    success: true,
    ...override,
  };
}

export function sendResponse(res, payload, statusCode = 200, context = {}) {
  console.log(payload);
  if (payload instanceof CustomError) {
    const code = payload.statusCode || 500;
    return res.status(code).json(formatError(payload));
  }

  if (payload instanceof Error) {
    const newError = createError(payload);
    const code = newError.statusCode || 500;
    return res.status(code).json(formatError(newError));
  }

  return res.status(statusCode).json(formatResponse(payload));
}
