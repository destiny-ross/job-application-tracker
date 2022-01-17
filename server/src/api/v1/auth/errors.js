import { CustomError } from "../../../utils/customError";

export const Errors = {
  EMAIL_IN_USE: {
    type: CustomError.type.APP_NAME,
    code: "EMAIL_IN_USE",
    message: "Email address is already in use. Signin instead?",
    statusCode: 400,
  },
  AUTH_WEAK_PASSWORD: {
    type: CustomError.type.APP_NAME,
    code: "AUTH_WEAK_PASSWORD",
    message: "The given password is easy to guess, provide strong password",
    statusCode: 400,
  },
};
