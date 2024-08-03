import React from "react";
import EventBox from "./EventBox";
import { CardData } from "../hooks/useJobData";

type ImgType = {
  plus: string;
  fire: string;
  locat: string;
  calVid: string;
  calRig: string;
};
const RightBox = ({ about }: CardData) => {
  const EventData = [
    {
      title: "Posted On",
      img: "/assets/plus-circle.svg",
      data: about?.posted_on,
    },
    {
      title: "Deadline",
      img: "/assets/Icon-fire.svg",
      data: about?.deadline,
    },
    {
      title: "Location",
      img: "/assets/Icon-location.svg",
      data: about?.location,
    },
    {
      title: "Start Date",
      img: "/assets/calendar-vid.svg",
      data: about?.start_date,
    },
    {
      title: "End Date",
      img: "/assets/calendar-right.svg",
      data: about?.end_date,
    },
  ];

  return (
    <div className="min-w-72 flex flex-col gap-5 w-fit">
      <h1 className=" text-2xl font-bold">About</h1>
      {EventData.map((data, index) => (
        <EventBox
          key={index}
          imgUrl={data.img}
          title={data.title}
          abData={data.data}
        />
      ))}

      <div className="border-b-2 border-solid border-bd-1"></div>
      <h1 className=" text-2xl font-bold">Categories</h1>
      <div className=" flex gap-2">
        {about?.categories.map((data, index) => (
          <div
            key={index}
            className={`flex justify-center items-center text-sm  ${
              index % 2
                ? "text-green-500 bg-green-100"
                : "text-orange-400 bg-orange-50"
            } rounded-3xl py-1.5 px-2.5`}
          >
            {data}
          </div>
        ))}
      </div>
      <div className="border-b-2 border-solid border-bd-1"></div>
      <h1 className=" text-2xl font-bold">Required Skills</h1>
      <div className="skill flex gap-2 flex-wrap">
        {about?.required_skills.map((data, index) => (
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
