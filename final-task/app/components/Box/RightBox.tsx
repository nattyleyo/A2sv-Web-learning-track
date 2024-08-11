import React from "react";
import EventBox from "./EventBox";
import { JobData } from "../../redux/slices/jobsData/jobsdataSlice";
import { useAppSelector } from "../../redux/store/store";
import { width } from "@fortawesome/free-solid-svg-icons/fa0";
type RType = {
  descId: string;
  // plus: string;
  // fire: string;
  // locat: string;
  // calVid: string;
  // calRig: string;
};
const RightBox = ({ descId }: RType) => {
  const jobsData = useAppSelector((state) => state.jobData);
  const jobs = jobsData.data;
  const data = jobs.find((job: JobData) => job.id === descId);

  if (!data) {
    return <p>Job not found</p>;
  }

  console.log(descId);

  const EventData = [
    {
      title: "Posted On",
      img: "/assets/plus-circle.svg",
      abdata: data.datePosted.split("T")[0],
    },
    {
      title: "Deadline",
      img: "/assets/Icon-fire.svg",
      abdata: data.deadline.split("T")[0],
    },
    {
      title: "Location",
      img: "/assets/Icon-location.svg",
      abdata: data.location.join(" & "),
    },
    {
      title: "Start Date",
      img: "/assets/calendar-vid.svg",
      abdata: data.startDate.split("T")[0],
    },
    {
      title: "End Date",
      img: "/assets/calendar-right.svg",
      abdata: data.endDate.split("T")[0],
    },
  ];

  return (
    <div className="min-w-72 flex flex-col gap-5 w-fit">
      <h1 className=" text-2xl font-bold">About</h1>
      {EventData.map((cont, index) => (
        <>
          <EventBox
            key={index}
            imgUrl={cont.img}
            title={cont.title}
            abData={cont.abdata}
          />
        </>
      ))}
      {/* // aboutData={data.abdata} */}
      <div className="border-b-2 border-solid border-bd-1"></div>
      <h1 className=" text-2xl font-bold">Categories</h1>
      <div className=" flex gap-2 flex-wrap">
        {data.categories.map((cat, index) => (
          <div
            key={index}
            className={`flex justify-center text-nowrap items-center text-sm ${
              index % 2
                ? "text-green-500 bg-green-100"
                : "text-orange-400 bg-orange-50"
            } rounded-2xl py-2 px-3`}
          >
            {cat}
          </div>
        ))}
      </div>
      <div className="border-b-2 border-solid border-bd-1"></div>
      <h1 className=" text-2xl font-bold">Required Skills</h1>
      <div className="skill flex gap-2 flex-wrap">
        {data.requiredSkills.map((data, index) => (
          <div
            key={index}
            className="flex  justify-center text-nowrap items-center text-sm text-blue-950 bg-blue-50 rounded-lg py-1.5 px-2.5"
          >
            {data}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightBox;
