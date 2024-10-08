import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: {},
};
const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setPricingData: (state, { payload }) => {
      state.data = payload;
    },
  },
});

export const { setPricingData } = dataSlice.actions;

export default dataSlice.reducer;
