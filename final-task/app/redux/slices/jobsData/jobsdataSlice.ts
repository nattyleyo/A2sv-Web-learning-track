import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// types/Job.ts

export interface JobData {
  applicantsCount: number;
  average_rating: number;
  categories: string[];
  createdAt: string; // Consider using Date if you prefer working with Date objects
  datePosted: string; // Consider using Date if you prefer working with Date objects
  deadline: string; // Consider using Date if you prefer working with Date objects
  description: string;
  endDate: string; // Consider using Date if you prefer working with Date objects
  id: string;
  idealCandidate: string;
  isBookmarked: boolean;
  isRolling: boolean;
  location: string[];
  logoUrl: string;
  opType: string; // e.g., "inPerson"
  orgEmail: string;
  orgID: string;
  orgName: string;
  orgPrimaryPhone: string;
  perksAndBenefits: string | null; // If it can be null
  questions: string | null; // If it can be null
  requiredSkills: string[];
  requirements: string;
  responsibilities: string;
  startDate: string; // Consider using Date if you prefer working with Date objects
  status: string; // e.g., "open"
  title: string;
  total_reviews: number;
  updatedAt: string; // Consider using Date if you prefer working with Date objects
  viewsCount: number;
  whenAndWhere: string;
}

export const DefaultJobData: JobData = {
  applicantsCount: 0,
  average_rating: 0,
  categories: [],
  createdAt: new Date().toISOString(), // Default to the current date
  datePosted: new Date().toISOString(), // Default to the current date
  deadline: new Date().toISOString(), // Default to the current date
  description: "",
  endDate: new Date().toISOString(), // Default to the current date
  id: "",
  idealCandidate: "",
  isBookmarked: false,
  isRolling: false,
  location: [],
  logoUrl: "",
  opType: "",
  orgEmail: "",
  orgID: "",
  orgName: "",
  orgPrimaryPhone: "",
  perksAndBenefits: null,
  questions: null,
  requiredSkills: [],
  requirements: "",
  responsibilities: "",
  startDate: new Date().toISOString(), // Default to the current date
  status: "open",
  title: "",
  total_reviews: 0,
  updatedAt: new Date().toISOString(), // Default to the current date
  viewsCount: 0,
  whenAndWhere: "",
};

// app/redux/slices/jobsData/jobsdataSlice.ts


interface JobsState {
  data: JobData[];
  loading: boolean;
  error: string | null;
}

const initialState: JobsState = {
  data: [],
  loading: false,
  error: null,
};

const jobDataSlice = createSlice({
  name: 'jobData',
  initialState,
  reducers: {
    setJobData: (state, action: PayloadAction<JobData[]>) => {
      state.data = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setJobData, setLoading, setError } = jobDataSlice.actions;
export default jobDataSlice.reducer;
