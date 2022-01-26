import express from "express";
import cookieSession from "cookie-session";
import morgan from "morgan";
import { currentUser } from "./currentUser.js";

export const globalMiddleware = (app) => {
  app.use(express.json());
  app.use(morgan("dev"));
  app.use(
    cookieSession({
      signed: false,
      secure: process.env.NODE_ENV !== "test",
    })
  );
  app.use(currentUser);
};
