// app/DispatchJobData.tsx
"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setJobData } from "./slices/jobsData/jobsdataSlice";
import JobList from "../components/Jobs/JobList";

const DispatchJobData = ({ jobData }: { jobData: any }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setJobData(jobData));
  }, [dispatch, jobData]);

  return <JobList />;
};

export default DispatchJobData;
