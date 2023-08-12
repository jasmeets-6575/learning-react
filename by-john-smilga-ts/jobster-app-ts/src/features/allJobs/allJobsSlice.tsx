import { createSlice } from "@reduxjs/toolkit";

type AllJobsInitialStateType = {};
const initialState: AllJobsInitialStateType = {};

const allJobsSlice = createSlice({
  name: "allJobsSlice",
  initialState,
  reducers: {},
});

export const {} = allJobsSlice.actions;

export default allJobsSlice.reducer;
