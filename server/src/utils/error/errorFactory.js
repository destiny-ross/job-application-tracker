// Converts third party exception or any error to CustomError exception

import * as Yup from "yup";
import { CustomError } from "./customError.js";

export function createError(error, overrides) {
  const isYupError = error instanceof Yup.ValidationError;
  console.log({ isYupError });
  if (isYupError) {
    const yupError = mapYupValidationError(error);
    return new CustomError(yupError, overrides);
  }
  console.log("here", error);
  return new CustomError(error, overrides);
}

function mapYupValidationError(error) {
  return {
    type: CustomError.type.APP_NAME,
    code: "VALIDATION_ERROR",
    message: error.message,
    errors: error.inner,
    statusCode: 400,
    meta: {
      context: error.value,
    },
  };
}
