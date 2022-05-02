import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/login";
import userDetailReducer from "../features/userDetail";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    userDetails: userDetailReducer,
  },
});
