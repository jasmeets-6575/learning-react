import { createSlice } from "@reduxjs/toolkit";

type JobInitialStateType = {};
const initialState: JobInitialStateType = {};

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {},
});

export const {} = jobSlice.actions;

export default jobSlice.reducer;
