import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { loginReducer } from "./login.slice";

export const store = configureStore({
  reducer: {
    login: loginReducer
  },
})

export type RootState = ReturnType<typeof store.getState>