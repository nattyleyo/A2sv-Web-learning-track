"use client";
import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as faBookmarkRegular } from "@fortawesome/free-regular-svg-icons";
import { faBookmark as faBookmarkSolid } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { JobData } from "../../redux/slices/jobsData/jobsdataSlice";

const JobCard = ({
  id,
  title,
  orgName,
  location,
  logoUrl,
  description,
  opType,
  isBookmarked,
  onBookmarkToggle,
}: JobData & {
  isBookmarked: boolean;
  onBookmarkToggle: (id: string) => void;
}) => {
  const defaultLogoUrl = "/assets/im.png";

  return (
    <div
      data-job-card="job-card"
      className="flex max-w-4xl gap-6 border-2 border-solid border-bd-1 py-8 px-8 bg-white justify-between rounded-3xl hover:bg-blue-50 cursor-pointer"
    >
      <Link href={`/desc/${id}`} passHref>
        <div className="max-w-4xl flex gap-6">
          <Image
            src={logoUrl || defaultLogoUrl}
            alt="Job Image"
            width={60}
            height={60}
            className="bg-contain w-16 h-14"
          />
          <div className="flex flex-col justify-start gap-2">
            <h1 className="text-2xl font-semibold text-text-1">{title}</h1>
            <h3 className="text-base capitalize text-text-2">
              {orgName}
              <span>. </span>
              <span>{location}</span>
            </h3>
            <p className="text-base text-text-1">{description}</p>
            <div className="flex gap-2 mt-2">
              <div className="flex justify-center items-center text-sm text-green-500 bg-green-100 rounded-3xl py-1.5 px-3">
                {opType}
              </div>
              <div className="flex justify-center items-center text-sm text-green-300">
                |
              </div>
              <div className="flex justify-center items-center text-sm text-orange-400 border-2 border-solid border-orange-400 rounded-full py-1.5 px-2.5">
                Education
              </div>
              <div className="w-16 flex justify-center items-center border-2 border-solid rounded-full border-blue-950 py-1.5 px-2.5">
                IT
              </div>
            </div>
          </div>
        </div>
      </Link>
      <FontAwesomeIcon
        data-testid="bookmark-icon"
        onClick={() => onBookmarkToggle(id)} // Use the passed function here
        icon={isBookmarked ? faBookmarkSolid : faBookmarkRegular} // Toggle icon
        className={`${
          isBookmarked ? "faBookmarkSolid" : "faBookmarkRegular"
        } text-3xl text-purple-700`}
      />
    </div>
  );
};

export default JobCard;
