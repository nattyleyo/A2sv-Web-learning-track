"use client";
import React from "react";
import JobCard from "./JobCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { JobData } from "../redux/slices/jobsData/jobsdataSlice";
import { useAppSelector } from "../redux/store/store";

const JobList = () => {
  const jobsData = useAppSelector((state) => state.jobData.data);

  if (!jobsData || jobsData.length === 0) {
    return <p>loading....</p>;
  }
  console.log(jobsData);

  return (
    <div className="flex flex-col justify-start gap-6">
      <div className="max-w-4xl flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold">Opportunities</h1>
          <h3 className="text-base text-text-2">
            Showing {jobsData.length} results
          </h3>
        </div>
        <div className="flex items-center gap-2 text-base text-text-2">
          Sort by:{" "}
          <button className="flex gap-2 items-center font-semibold text-text-1 rounded-lg p-1 hover:border-2 border-solid ">
            Most relevant
            <span>
              <FontAwesomeIcon icon={faChevronDown} className="text-base w-4" />
            </span>
          </button>
        </div>
      </div>
      {jobsData.map((job: JobData, index: number) => (
        <Link key={index} href={`/desc/${job.id}`} passHref>
          <div>
            <JobCard {...job} />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default JobList;
