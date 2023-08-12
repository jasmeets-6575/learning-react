import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customFetch from "../../utils/axios";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

export type UserType = {
  name: string;
  lastName: string;
  email: string;
  location: string;
  token: string;
};
export type RegisterUserType = {
  name: string;
  email: string;
  password: string;
  user?: UserType
};
export type LoginUserType = {
  email: string;
  password: string;
  user?: UserType
};

type UserInitialStateType = {
  isLoading: boolean;
  isSidebarOpen: boolean;
  user: UserType | null;
};
const initialState: UserInitialStateType = {
  isLoading: false,
  isSidebarOpen: false,
  user: null,
};

export const registerUser = createAsyncThunk<
  RegisterUserType,
  Partial<RegisterUserType>
>("user/registerUser", async (user, thunkAPI) => {
  try {
    const resp = await customFetch.post("/auth/register", user);
    return resp.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
});

export const loginUser = createAsyncThunk<
  LoginUserType,
  Partial<LoginUserType>
>("user/loginUser", async (user, thunkAPI) => {
  try {
    const resp = await customFetch.post("/auth/login", user);
    return resp.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
       
        toast.success(`Hello there ${user.name}`);
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        addUserToLocalStorage(user);
        toast.success(`Welcome Back ${user.name}`);
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
});

export const {} = userSlice.actions;

export default userSlice.reducer;
