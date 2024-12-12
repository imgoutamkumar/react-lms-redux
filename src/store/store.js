import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/slices/authSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
