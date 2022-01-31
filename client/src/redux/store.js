import { configureStore } from "@reduxjs/toolkit";
import applicationsReducer from "./applications/applicationsSlice";
import authReducer from "./auth/authSlice";

export default configureStore({
  reducer: { auth: authReducer, applications: applicationsReducer },
});
