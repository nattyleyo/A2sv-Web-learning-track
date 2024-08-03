"use client";
import React from "react";
import JobCard, { CardData } from "./JobCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import useJobData from "../hooks/useJobData"; // Check this path
import { library } from "@fortawesome/fontawesome-svg-core";

const JobList = () => {
  const JobsData = useJobData();

  if (!JobsData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col justify-start gap-6">
      <div className="max-w-4xl flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold">Opportunities</h1>
          <h3 className="text-base text-text-2">
            Showing {JobsData.length} results
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
      {JobsData.map((job, index) => (
        <Link key={index} href={`/desc/${index + 1}`} passHref>
          <div>
            <JobCard {...job} />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default JobList;
