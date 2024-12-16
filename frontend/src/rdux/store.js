import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slice/counter";
import PostReducer from "./slice/cartSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    cart: PostReducer,
  },
});
