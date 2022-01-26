import { v4 as uuidv4 } from "uuid";
import * as argon2 from "argon2";
import jwt from "jsonwebtoken";

import { CustomError } from "../../../utils/error/customError.js";
import { sendResponse } from "../../../utils/responseHandler.js";
import { AuthenticationErrors } from "./errors.js";

export const signup = async (req, res, next) => {
  const db = req.app.get("db");
  const { email, first_name, last_name, password } = req.body;

  // Check if email already exists
  const duplicate =
    (await db("users").where({ email }).select("id")).length === 0
      ? false
      : true;
  if (duplicate) {
    return next(new CustomError(AuthenticationErrors.EMAIL_IN_USE));
  }

  try {
    const hashedPassword = await argon2.hash(password);
    const userResponse = await db("users")
      .returning(["id", "email", "first_name", "last_name"])
      .insert({
        id: uuidv4(),
        email: email,
        hash: hashedPassword,
        first_name: first_name,
        last_name: last_name,
      });

    const token = jwt.sign({ ...userResponse }, process.env.JWT_KEY);
    req.session = {
      jwt: token,
    };

    sendResponse(res, userResponse, 201);
  } catch (err) {
    // unhandled error
    next(err);
  }
};

export const signin = async (req, res, next) => {
  const db = req.app.get("db");
  const { email, password } = req.body;

  try {
    const user = await db("users").where({ email }).first();
    if (!user) {
      return next(new CustomError(AuthenticationErrors.LOGIN_INVALID));
    }

    const passwordIsValid = await argon2.verify(user.hash, password);
    if (!passwordIsValid) {
      return next(new CustomError(AuthenticationErrors.LOGIN_INVALID));
    }

    delete user.hash;

    const token = jwt.sign({ ...user }, process.env.JWT_KEY);

    req.session = {
      jwt: token,
    };

    sendResponse(res, user, 200);
  } catch (err) {
    console.log(err);
  }
};

export const signout = (req, res) => {
  req.session = null;
  sendResponse(res, {}, 200);
};

export const me = (_req, res) => {
  sendResponse(res, {}, 200);
};
