import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getUserFromLocalStorage } from "../../utils/localStorage";

type JobInitialStateType = {
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

const initialState: JobInitialStateType = {
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
  }, //
});

export const { handleChange, clearValues } = jobSlice.actions;

export default jobSlice.reducer;
