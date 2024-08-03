// app/desc/[descId]/page.tsx
"use client";

import React from "react";
import Description from "../../components/Description";
import useJobData, { CardData } from "@/app/hooks/useJobData";

const DescData = ({ params }: { params: { descId: number } }) => {
  const JobsData = useJobData();

  if (!JobsData) {
    return <div>Loading...</div>;
  }

  const job: CardData | undefined = JobsData[Number(params.descId) - 1];

  if (!job) {
    return <div>Job not found</div>;
  }

  const defaultJob: CardData = {
    title: job.title || "No title available",
    description: job.description || "No description available",
    responsibilities: job.responsibilities || [],
    ideal_candidate: job.ideal_candidate || {
      age: "N/A",
      gender: "N/A",
      traits: [],
    },
    when_where: job.when_where || "N/A",
    about: job.about || {
      posted_on: "N/A",
      deadline: "N/A",
      location: "N/A",
      start_date: "N/A",
      end_date: "N/A",
      categories: [],
      required_skills: [],
    },
    company: job.company || "N/A",
    image: job.image || "N/A",
  };

  return (
    <>
      <Description {...defaultJob} />
    </>
  );
};

export default DescData;
