import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./components/TodoSlice/TodoSlice";

const store = configureStore({
  reducer: {
    TodoSlice: todoSlice.reducer
  },
});

export default store;