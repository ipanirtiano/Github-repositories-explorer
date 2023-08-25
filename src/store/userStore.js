import { configureStore } from "@reduxjs/toolkit";

import usersReducer from "../utils/apiSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
