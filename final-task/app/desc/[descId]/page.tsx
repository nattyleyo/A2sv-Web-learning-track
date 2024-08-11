// app/desc/[descId]/page.tsx

"use client";

import React from "react";
import { useAppSelector } from "@/app/redux/store/store";
import { JobData } from "@/app/redux/slices/jobsData/jobsdataSlice";
import Description from "@/app/components/Jobs/Description";
import NavBar from "@/app/components/Nav/NavBar";

const DescData = ({ params }: { params: { descId: string } }) => {
  const jobsData = useAppSelector((state) => state.data);

  if (!jobsData) {
    return <p>Unable to find job description</p>;
  }

  const jobs = jobsData; // Access the jobs array
  const data = jobs.find((job: JobData) => job.id === params.descId);
  if (!data) {
    return <p>Job not found</p>;
  }

  return (
    <>
      <NavBar />
      <Description {...data} />
    </>
  );
};

export default DescData;
