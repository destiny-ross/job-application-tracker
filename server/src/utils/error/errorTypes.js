import { CustomError } from "./customError.js";

const ErrorTypes = {
  // Application custom errors
  UNKNOWN_ERROR: {
    type: CustomError.type.APP_NAME,
    code: "UNKNOWN_ERROR",
    message: "Unknown error",
    statusCode: 500,
  },
  // Predefined 4xx http errors
  BAD_REQUEST: {
    type: CustomError.type.NETWORK,
    code: "BAD_REQUEST",
    message: "Bad request",
    statusCode: 400,
  },
  UNAUTHORIZED: {
    type: CustomError.type.NETWORK,
    code: "UNAUTHORIZED",
    message: "Unauthorized",
    statusCode: 401,
  },
  FORBIDDEN: {
    type: CustomError.type.NETWORK,
    code: "FORBIDDEN",
    message: "Forbidden",
    statusCode: 403,
  },
  RESOURCE_NOT_FOUND: {
    type: CustomError.type.NETWORK,
    code: "RESOURCE_NOT_FOUND",
    message: "Resource not found",
    statusCode: 404,
    meta: {
      translationKey: "app.common.error.RESOURCE_NOT_FOUND",
    },
  },

  // Predefined 5xx http errors
  INTERNAL_SERVER_ERROR: {
    type: CustomError.type.NETWORK,
    code: "INTERNAL_SERVER_ERROR",
    message: "Something went wrong, Please try again later.",
    statusCode: 500,
    meta: {
      shouldRedirect: true,
    },
  },
  BAD_GATEWAY: {
    type: CustomError.type.NETWORK,
    code: "BAD_GATEWAY",
    message: "Bad gateway",
    statusCode: 502,
  },
  SERVICE_UNAVAILABLE: {
    type: CustomError.type.NETWORK,
    code: "SERVICE_UNAVAILABLE",
    message: "Service unavailable",
    statusCode: 503,
  },
  GATEWAY_TIMEOUT: {
    type: CustomError.type.NETWORK,
    code: "GATEWAY_TIMEOUT",
    message: "Gateway timeout",
    statusCode: 504,
  },
};

export { ErrorTypes };
