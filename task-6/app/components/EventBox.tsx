import React from "react";
import Image from "next/image";
import { CardData } from "../hooks/useJobData";

interface Imgtype {
  imgUrl: string;
  abData: string;
  title: string;
}
const EventBox = ({ imgUrl, abData, title }: Imgtype) => {
  return (
    <div className="flex gap-4 items-center">
      <div className=" p-2.5 rounded-full border-px text-text-6 text-lg">
        <Image
          src={imgUrl}
          alt="Job Image"
          width={60}
          height={60}
          className=" bg-contain w-6 h-6"
        />
      </div>
      <div className="flex flex-col">
        <p className="tittle text-base text-text-2">{title}</p>
        <p className="dates text-base font-semibold text-text-1">{abData}</p>
      </div>
    </div>
  );
};

export default EventBox;
