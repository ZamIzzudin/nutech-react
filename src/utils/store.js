/** @format */

import { configureStore } from "@reduxjs/toolkit";

import { AuthReducer } from "./reducer/auth";
import { ProfileReducer } from "./reducer/profile";

const store = configureStore({
  reducer: {
    auth: AuthReducer,
    profile: ProfileReducer,
  },
});

export default store;
