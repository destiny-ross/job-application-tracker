import { sendResponse } from "../../../utils/responseHandler.js";

export const signup = (req, res) => {
  let newUser = req.body;
  sendResponse(res, newUser, 201);
};

export const signin = (_req, res) => {
  sendResponse(res, {}, 200);
};

export const signout = (_req, res) => {
  sendResponse(res, {}, 200);
};

export const me = (_req, res) => {
  sendResponse(res, {}, 200);
};
