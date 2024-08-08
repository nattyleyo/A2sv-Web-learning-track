import React from "react";
import RightBox from "./RightBox";
import Image from "next/image";
import imgUrl from "../../public/assets/Icon-location.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { JobData } from "../redux/slices/jobsData/jobsdataSlice";
import {
  faChevronDown,
  faCircleCheck,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

const Description = ({
  id,
  title,
  description,
  responsibilities,
  idealCandidate,
  whenAndWhere,
}: JobData) => {
  return (
    <div className="flex flex-row p-8 gap-16 px-16 relative top-12">
      <div className="flex flex-col grow gap-14">
        <div className="flex flex-col gap-4">
          <h1 className=" text-2xl font-bold">Description</h1>
          <p className=" text-base text-text-1">{description}</p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className=" text-2xl font-bold">Responsibilities</h1>
          <ul className="flex flex-col gap-2 text-base text-text-1">
            {responsibilities.split("\n").map((responsibility, index) => (
              <li key={index} className="flex gap-2">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-base w-4 text-green-400"
                />
                {responsibility}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className=" text-2xl font-bold">Ideal Candidate We want</h1>
          <ul className="flex flex-col text-base text-text-1 gap-2">
            {/* <li className="font-bold list-disc">{}</li> */}
            {/* <li className="font-bold list-disc">{}</li> */}
            <li className=" list-disc">{idealCandidate}</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">When & Where</h1>
          <p className="flex gap-2 items-center text-base text-text-1">
            <div className="boxi p-2.5 rounded-full border-px text-text-6 text-lg">
              <Image
                src={imgUrl}
                alt="Job Image"
                width={60}
                height={60}
                className=" bg-contain w-6 h-6"
              />
            </div>
            {whenAndWhere}
          </p>
        </div>
      </div>
      <RightBox descId={id} />
    </div>
  );
};

export default Description;
