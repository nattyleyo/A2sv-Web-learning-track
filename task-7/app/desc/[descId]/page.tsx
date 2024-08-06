// app/desc/[descId]/page.tsx

"use client";

import React from "react";
import { useAppSelector } from "@/app/redux/store/store";
import { JobData } from "@/app/redux/slices/jobsData/jobsdataSlice";
import Description from "@/app/components/Description";

const DescData = ({ params }: { params: { descId: string } }) => {
  const jobsData = useAppSelector((state) => state.jobData);

  if (jobsData.loading) {
    return <p>Loading...</p>;
  }

  if (jobsData.error) {
    return <p>Error: {jobsData.error}</p>;
  }

  const jobs = jobsData.data; // Access the jobs array
  const data = jobs.find((job: JobData) => job.id === params.descId);

  if (!data) {
    return <p>Job not found</p>;
  }

  return (
    <>
      <Description {...data} />
    </>
  );
};

export default DescData;
