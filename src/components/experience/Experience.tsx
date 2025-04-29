import React from "react";
import ExperienceTimeline from "./ExperienceTimeline";
import { lusitana } from "@/fonts/fonts";

type Props = {};

const Experience = (props: Props) => {
  return (
    <div className="flex justify-center flex-col items-center">
      <h2
        className={`${lusitana.className} text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-wider`}
      >
        Experience
      </h2>
      <div className="mt-10">
        <ExperienceTimeline />
      </div>
    </div>
  );
};

export default Experience;
