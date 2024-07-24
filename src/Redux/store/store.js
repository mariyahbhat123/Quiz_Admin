import { configureStore } from "@reduxjs/toolkit";
import QuesType from "../slice/QuesType";

export const store = configureStore({
  reducer: {
    quesType: QuesType,
  },
});
