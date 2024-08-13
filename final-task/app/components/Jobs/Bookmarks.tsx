"use client";
import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faBookmark as faBookmarkRegular } from "@fortawesome/free-regular-svg-icons";
import { faBookmark as faBookmarkSolid } from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";
import { JobData } from "../../redux/slices/jobsData/jobsdataSlice";
import { useAppSelector } from "../../redux/store/store";
import { useSession } from "next-auth/react";
import { BookmarkCrud, getBookmarks } from "@/app/api/bookmarks";
import imgUrl from "../../../public/assets/add.svg";
import Image from "next/image";

const Bookmarks = () => {
  const { data: session } = useSession();
  const jobsData: any = useAppSelector((state) => state.data);
  const [bookmarkedJobs, setBookmarkedJobs] = useState<{
    [key: string]: boolean;
  }>({});
  const accessToken = session?.user?.accessToken;

  useEffect(() => {
    const fetchBookmarks = async () => {
      if (accessToken) {
        const res: [] = await getBookmarks(accessToken);
        const tempObj: { [key: string] } = {};
        res.map((bookmark) => {
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
      <div className="flex justify-center items-center gap-6 flex-col">
        <Image width={240} height={240} src={imgUrl} alt={imgUrl} />
        No Bookmark Found
      </div>
    );
  }

  const bookmarkedLength = Object.keys(bookmarkedJobs).filter(
    (key) => bookmarkedJobs[key]
  ).length;

  return (
    <>
      <main className="w-full flex flex-col justify-center gap-16 py-20 px-32">
        <div className=" flex flex-col items-center gap-6 z-0">
          <div className="tittle w-full max-w-4xl flex grow justify-between">
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl font-bold">Bookmarks</h1>
              <h3 className="text-base text-text-2">
                Showing {bookmarkedLength} results
              </h3>
            </div>

            <div className="flex items-center gap-2 text-base text-text-2">
              Sort by:{" "}
              <button className="flex gap-2 items-center font-semibold text-text-1 rounded-lg p-1 hover:border-2 border-solid ">
                Most relevant
                <span>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="text-base w-4"
                  />
                </span>
              </button>
            </div>
          </div>

          {jobsData.map(
            (job: JobData, index: number) =>
              bookmarkedJobs[job.id] && (
                <JobCard
                  key={job.id}
                  {...job}
                  isBookmarked={bookmarkedJobs[job.id]}
                  onBookmarkToggle={handleBookmark}
                />
              )
          )}
          {bookmarkedLength === 0 && (
            <div className="flex justify-center items-center gap-6 flex-col">
              <Image width={240} height={240} src={imgUrl} alt={imgUrl} />
              No Bookmark Found
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Bookmarks;
