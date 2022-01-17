// Route registration and documentation
// Operations performed in adjacent controller files

import { Router } from "express";
import { CustomError } from "../../../utils/error/customError.js";
import { ErrorTypes } from "../../../utils/error/errorTypes.js";
import { signup } from "./controller.js";
import { validateSignup } from "./validation.js";
const authRouter = Router();

/**
 * @swagger
 * /auth/signup:
 *   post:
 *     description: Stores user information in db after hashing password
 *     responses:
 *       200:
 *         description: returns user object after storing successfully in db
 */
authRouter.post("/signup", validateSignup, signup);

/**
 * @swagger
 * /auth/signin:
 *   post:
 *     description: Stores user information in db after hashing password
 *     responses:
 *       200:
 *         description: returns user object after storing successfully in db
 */
authRouter.route("/signin").post((req, res) => {
  res.send("...signing in...");
});

/**
 * @swagger
 * /auth/signout:
 *   delete:
 *     description: Signs out a user
 *     responses:
 *       200:
 *         description: signs out user
 */
authRouter.route("/signout").delete((req, res) => {
  res.send("...signing out...");
});

/**
 * @openapi
 * /auth/me:
 *   get:
 *     description: Retreives a logged-in user's info!
 *     responses:
 *       200:
 *         description: returns user logged in.
 */
authRouter.route("/me").get((req, res) => {
  res.send("me");
});

export default authRouter;
