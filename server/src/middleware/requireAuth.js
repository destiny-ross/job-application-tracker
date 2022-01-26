import { CustomError } from "../utils/error/customError.js";
import { ErrorTypes } from "../utils/error/errorTypes.js";

export const requireAuth = (req, res, next) => {
  //require auth will only run after currentuser middleware

  if (!req.currentUser) {
    return next(new CustomError(ErrorTypes.UNAUTHORIZED));
  }
  next();
};
