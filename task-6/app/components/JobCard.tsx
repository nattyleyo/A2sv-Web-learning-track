import React from "react";
import Image from "next/image";

export interface CardData {
  title: string;
  description: string;
  responsibilities: string[];
  ideal_candidate: {
    age: string;
    gender: string;
    traits: string[];
  };
  when_where: string;
  about: {
    posted_on: string;
    deadline: string;
    location: string;
    start_date: string;
    end_date: string;
    categories: string[];
    required_skills: string[];
  };
  company: string;
  image: string;
}
const JobCard = ({
  title,
  description,
  responsibilities,
  ideal_candidate,
  when_where,
  about,
  company,
  image,
}: CardData) => {
  return (
    <div className="max-w-4xl flex gap-6 border-2 border-solid border-bd-1 p-6 bg-white justify-between rounded-3xl hover:bg-bg-1 cursor-pointer">
      <Image
        src={image}
        alt="Job Image"
        width={60}
        height={60}
        className=" bg-contain w-16 h-14"
      />
      <div className="flex flex-col justify-start gap-2">
        <h1 className=" text-2xl font-semibold text-text-1">{title}</h1>
        <h3 className=" text-base capitalize  text-text-2">
          {company}
          <span>. </span>
          <span>{about.location}</span>
        </h3>
        <p className=" text-base text-text-1">{description}</p>
        <div className=" flex gap-2 mt-2">
          <div className="flex justify-center items-center text-sm text-green-500 bg-green-100 rounded-3xl py-1.5 px-2.5">
            In Person
          </div>
          <div className="flex justify-center items-center text-sm text-green-300">
            |
          </div>
          <div
            className="flex justify-center items-center text-sm text-orange-400 border-2 border-solid border-orange-400 rounded-full py-1.5 px-2.5
          "
          >
            Education
          </div>
          <div className=" w-16 flex justify-center items-center border-2 border-solid rounded-full border-blue-950 py-1.5 px-2.5">
            IT
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
