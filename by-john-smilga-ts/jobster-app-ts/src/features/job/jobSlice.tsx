import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserFromLocalStorage } from "../../utils/localStorage";
import { AxiosError } from "axios";
import customFetch from "../../utils/axios";
import { ToastContent, toast } from "react-toastify";

export type JobInitialStateType = {
  isLoading: boolean;
  position: string;
  company: string;
  jobLocation: string;
  jobTypeOptions: string[];
  jobType: string;
  statusOptions: string[];
  status: string;
  isEditing: boolean;
  editJobId: string;
};

export const initialState: JobInitialStateType = {
  isLoading: false,
  position: "",
  company: "",
  jobLocation: "",
  jobTypeOptions: ["full-time", "part-time", "remote", "internship"],
  jobType: "full-time",
  statusOptions: ["interview", "declined", "pending"],
  status: "pending",
  isEditing: false,
  editJobId: "",
};

export type PayloadJobInitialStateType = {
  [K in keyof JobInitialStateType]: {
    key: K;
    value: JobInitialStateType[K];
  };
}[keyof JobInitialStateType];

export const createJob = createAsyncThunk<
  JobInitialStateType,
  Partial<JobInitialStateType>
>("job/createJob", async (job, { rejectWithValue, getState, dispatch }) => {
  try {
    const resp = await customFetch.post("/jobs", job, {
      headers: {
        Authorization: `Bearer ${
          (getState() as RootStateType).user?.user?.token
        }`,
      },
    });
    dispatch(clearValues());
    return resp.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return rejectWithValue(message);
    }
    // unhandled non-AxiosError goes here
    throw error;
  }
});

export const deleteJob = createAsyncThunk<
  JobInitialStateType,
  JobInitialStateType
>(
  "job/deleteJob",
  async ({ editJobId: jobId }, { rejectWithValue, getState, dispatch }) => {
    const url = `/jobs/${jobId}`;
    try {
      const resp = await customFetch.delete(url, {
        headers: {
          Authorization: `Bearer ${
            (getState() as RootStateType).user?.user?.token
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
        return rejectWithValue(message);
      }
      // unhandled non-AxiosError goes here
      throw error;
    }
  }
);
export const editJob = createAsyncThunk<
  JobInitialStateType,
  JobInitialStateType
>(
  "job/editJob",
  async (
    { editJobId: jobId, jobType: job },
    { rejectWithValue, getState, dispatch }
  ) => {
    const url = `/jobs/${jobId}`;
    try {
      const resp = await customFetch.patch(url, job, {
        headers: {
          Authorization: `Bearer ${
            (getState() as RootStateType).user?.user?.token
          }`,
        },
      });
      dispatch(clearValues());
      return resp.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        return rejectWithValue(message);
      }
      // unhandled non-AxiosError goes here
      throw error;
    }
  }
);

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    //
    handleChange: (
      state,
      action: PayloadAction<PayloadJobInitialStateType>
    ) => {
      const obj = action.payload;
      if (obj) {
        const { key, value } = obj;
        switch (key) {
          case "isLoading":
            state.isLoading = value;
            break;
          case "position":
            state.position = value;
            break;
          case "company":
            state.company = value;
            break;
          case "jobLocation":
            state.jobLocation = value;
            break;
          case "jobTypeOptions":
            state.jobTypeOptions = value;
            break;
          case "status":
            state.status = value;
            break;
          case "isEditing":
            state.isEditing = value;
            break;
          case "editJobId":
            state.editJobId = value;
            break;
          case "statusOptions":
            state.statusOptions = value;
            break;
          case "jobType":
            state.jobType = value;
            break;
        }
      }
    },
    clearValues: () => {
      return {
        ...initialState,
        jobLocation: getUserFromLocalStorage()?.location || "",
      };
    },
    setEditJob: (state, action) => {
      return { ...state, isEditing: true, ...action.payload };
    },
  }, //
  extraReducers: (builder) => {
    builder
      .addCase(createJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createJob.fulfilled, (state, action) => {
        state.isLoading = false;
        toast.success(" Job Created");
      })
      .addCase(createJob.rejected, (state, action) => {
        state.isLoading = false;
        const toastContent: ToastContent = action.payload as ToastContent;
        toast.error(toastContent);
      })
      .addCase(deleteJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteJob.fulfilled, (state, action) => {
        state.isLoading = false;
        toast.success("Job Deleted..");
      })
      .addCase(deleteJob.rejected, (state, action) => {
        state.isLoading = false;
        const toastContent: ToastContent = action.payload as ToastContent;
        toast.error(toastContent);
      })
      .addCase(editJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editJob.fulfilled, (state, action) => {
        state.isLoading = false;
        toast.success("Job Modified...");
      })
      .addCase(editJob.rejected, (state, action) => {
        state.isLoading = false;
        const toastContent: ToastContent = action.payload as ToastContent;
        toast.error(toastContent);
      });
  },
});

export const { handleChange, clearValues } = jobSlice.actions;

export default jobSlice.reducer;
