import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./features/dataSlice";
import billingDurationSlice from "./features/billingDurationSlice";
const store = configureStore({
  reducer: {
    data: dataSlice,
    billingDuration: billingDurationSlice,
  },
});
export default store;
