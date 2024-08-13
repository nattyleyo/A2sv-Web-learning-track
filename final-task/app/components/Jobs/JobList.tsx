"use client";
import React, { useEffect, useState } from "react";
import JobCard from "../Jobs/JobCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useAppSelector } from "../../redux/store/store";
import { useSession } from "next-auth/react";
import { BookmarkCrud, getBookmarks } from "@/app/api/bookmarks";
import { JobData } from "@/app/redux/slices/jobsData/jobsdataSlice";

const JobList = () => {
  const { data: session } = useSession();
  const jobsData: any = useAppSelector((state) => state.data);
  const [bookmarkedJobs, setBookmarkedJobs] = useState<{
    [key: string]: boolean;
  }>({});

  const accessToken = session?.user?.accessToken;

  useEffect(() => {
    const fetchBookmarks = async () => {
      if (accessToken) {
        const res: any[] = await getBookmarks(accessToken);
        const tempObj: { [key: string]: boolean } = {};
        res.forEach((bookmark) => {
          tempObj[bookmark.eventID] = true;
        });
        setBookmarkedJobs(tempObj);
      }
    };

    fetchBookmarks();
  }, [accessToken]);

  const handleBookmark = async (id: string) => {
    const isBookmarked = bookmarkedJobs[id];
    setBookmarkedJobs((prevState) => ({
      ...prevState,
      [id]: !isBookmarked,
    }));

    if (accessToken) {
      try {
        await BookmarkCrud(id, accessToken, isBookmarked);
      } catch (error) {
        console.error("Error updating bookmark:", error);
        setBookmarkedJobs((prevState) => ({
          ...prevState,
          [id]: isBookmarked,
        }));
      }
    }
  };

  if (!jobsData || jobsData.length === 0) {
    return (
      <div className="flex justify-center">
        <p className="text-purple-600">No jobs found.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-start gap-6 z-0">
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
      {jobsData.map((job: JobData) => (
        <JobCard
          key={job.id}
          {...job}
          isBookmarked={bookmarkedJobs[job.id]}
          onBookmarkToggle={handleBookmark}
        />
      ))}
    </div>
  );
};

export default JobList;
