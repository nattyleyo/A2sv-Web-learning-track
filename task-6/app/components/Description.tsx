import React from "react";
import RightBox from "./RightBox";
import Image from "next/image";
import { CardData } from "../hooks/useJobData";
import imgUrl from "../../public/assets/Icon-location.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  fa,
  faCircleCheck,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

const Description = (
  {
    description,
    responsibilities,
    ideal_candidate,
    when_where,
    about,
  }: CardData // title,
) => {
  return (
    <div className="flex flex-row p-8 gap-16 px-16">
      <div className="flex flex-col gap-14 py-12">
        <div className="flex flex-col gap-4">
          <h1 className=" text-2xl font-bold">Description</h1>
          <p className=" text-base text-text-1">{description}</p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className=" text-2xl font-bold">Responsibilities</h1>
          <ul className="flex flex-col gap-2 text-base text-text-1">
            {responsibilities.map((res, index) => (
              <li key={index} className="flex gap-2">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-base w-4 text-green-400"
                />

                {res}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className=" text-2xl font-bold">Ideal Candidate we want</h1>
          <ul className="flex flex-col text-base text-text-1 gap-2">
            <li className="font-bold list-disc">{ideal_candidate?.age}</li>
            <li className="font-bold list-disc">{ideal_candidate?.gender}</li>
            {ideal_candidate?.traits.map((x, i) => (
              <li key={i} className="list-disc">
                {x}
              </li>
            ))}
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
            {when_where}
          </p>
        </div>
      </div>
      <RightBox about={about} />
    </div>
  );
};

export default Description;
