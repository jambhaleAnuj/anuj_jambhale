import React from "react";
import { info } from "../../data/info";
import Education from "./Education";
import Experience from "./Experience";

interface AboutProps {
  about: (typeof info)["about"];
}

export default function About(props: AboutProps) {
  const { about } = props;

  return (
    <div className="flex flex-col justify-center items-center h-full space-y-4">
      <div className="flex flex-col space-y-4 w-full lg:w-[75%] mx-4">
        <h1 className="lg:text-4xl font-bold md:text-2xl sm:text-lg ">About me</h1>
        <p
          className="lg:text-2xl font-normal sm:text-sm md:text-xl"
          dangerouslySetInnerHTML={{ __html: about.description }}
        ></p>
        <div className="py-20"></div>
      </div>
      <Education education={about.education} />
      <Experience experience={about.experience} />
    </div>
  );
}
