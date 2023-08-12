import { createSlice } from "@reduxjs/toolkit";

type UserInitialStateType = {};
const initialState: UserInitialStateType = {};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const {} = userSlice.actions;

export default userSlice.reducer;
