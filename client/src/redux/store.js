import { configureStore } from "@reduxjs/toolkit";
import loadersReducer from "./loadingSlice";
import usersReducer from "./userSlice";

const store = configureStore({
  reducer: {
    loaders: loadersReducer,
    users: usersReducer,
  },
});

export default store;