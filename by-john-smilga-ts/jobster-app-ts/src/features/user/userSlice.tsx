import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customFetch from "../../utils/axios";
import { AxiosError } from "axios";
import { ToastContent, toast } from "react-toastify";
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from "../../utils/localStorage";

type UpdateUserGetState = {
  user: {
    isLoading: boolean;
    isSidebarOpen: boolean;
    user: {
      name: string;
      lastName: string;
      email: string;
      location: string;
      token: string;
    } | null;
  };
};

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
  user?: UserType;
};
export type LoginUserType = {
  email: string;
  password: string;
  user?: UserType;
};

type UserInitialStateType = {
  isLoading: boolean;
  isSidebarOpen: boolean;
  user: UserType | null;
};
const initialState: UserInitialStateType = {
  isLoading: false,
  isSidebarOpen: false,
  user: getUserFromLocalStorage(),
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

export const updateUser = createAsyncThunk<UserType, Partial<UserType>>(
  "user/updateUser",
  async (user, { rejectWithValue, getState, dispatch }) => {
    try {
      //   let gst = getState();
      //   console.log(gst);

      const resp = await customFetch.patch("/auth/updateUser", user, {
        headers: {
          Authorization: `Bearer ${
            (getState() as UpdateUserGetState).user?.user?.token
          }`,
        },
      });
      return resp.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        if (error && error.response && error.response.status === 401) {
          dispatch(logoutUser("Unauthorized! logging out..."));
          return rejectWithValue(`Unauthorized! logging out...`);
        }
        return rejectWithValue(message);
      }
      throw error;
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutUser: (state, { payload }) => {
      state.user = null;
      state.isSidebarOpen = false;
      removeUserFromLocalStorage();
      if (payload) {
        toast.success(payload);
      }
    },
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        if (user) {
          state.user = user;
          addUserToLocalStorage(user);
          toast.success(`Hello there ${user.name}`);
        }
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        const toastContent: ToastContent = action.payload as ToastContent;
        toast.error(toastContent);
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        if (user) {
          state.user = user;
          addUserToLocalStorage(user);
          toast.success(`Hello there ${user.name}`);
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        const toastContent: ToastContent = action.payload as ToastContent;
        toast.error(toastContent);
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        const user = payload;
        state.isLoading = false;
        if (user) {
          state.user = user;
          addUserToLocalStorage(user);
          toast.success(`User Updated`);
        }
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false;
        const toastContent: ToastContent = action.payload as ToastContent;
        toast.error(toastContent);
      });
  },
});

export const { toggleSidebar, logoutUser } = userSlice.actions;

export default userSlice.reducer;
