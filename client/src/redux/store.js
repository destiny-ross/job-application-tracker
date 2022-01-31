import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import applicationsReducer from "./applications/applicationsSlice";
import authReducer from "./auth/authSlice";

let middleware = [];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

export default configureStore({
  reducer: { auth: authReducer, applications: applicationsReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});
