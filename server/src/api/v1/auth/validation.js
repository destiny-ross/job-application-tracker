import * as Yup from "yup";
import { createError } from "../../../utils/error/errorFactory.js";

const signupSchema = () => {
  return Yup.object().shape({
    first_name: Yup.string().required().trim(),
    last_name: Yup.string().required().trim(),
    email: Yup.string().email("Invalid email provided").required(),
    password: Yup.string()
      .min(8, "Password has to be longer than 8 characters!")
      .required(),
  });
};

export async function validateSignup(req, _res, next) {
  try {
    await signupSchema().validate(req.body, { abortEarly: false });
  } catch (e) {
    return next(createError(e));
  }
  next();
}
