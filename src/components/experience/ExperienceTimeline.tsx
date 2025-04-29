import React from "react";
import { Timeline } from "antd";
import ExperienceCard from "./ExperienceCard";
import { experiences } from "@/constants/data";

type Props = {};

const ExperienceTimeline = (props: Props) => {
  const experienceData = (isLabel = false) =>
    experiences.map((experience) => {
      return {
        label: isLabel && <div className="text-white">{experience.date}</div>,
        color: experience.status === "present" ? "green" : "blue",
        children: <ExperienceCard experience={experience} isLabel={isLabel} />,
      };
    });

  return (
    <>
      <div className="hidden md:block">
        <Timeline
          mode="alternate"
          className="custom-timeline"
          items={experienceData(true)}
        />
      </div>
      <div className="md:hidden">
        <Timeline
          mode="left"
          className="custom-timeline"
          items={experienceData(false)}
        />
      </div>
    </>
  );
};

export default ExperienceTimeline;
