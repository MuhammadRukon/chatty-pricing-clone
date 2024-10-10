import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  billingDuration: "",
};
const billingDurationSlice = createSlice({
  name: "billingDuration",
  initialState,
  reducers: {
    setBillingDuration: (state, { payload }) => {
      state.billingDuration = payload;
    },
  },
});

export const { setBillingDuration } = billingDurationSlice.actions;

export default billingDurationSlice.reducer;
