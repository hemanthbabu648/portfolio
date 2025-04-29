import { Progress } from "antd";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface Skill {
  id: number;
  name: string;
  icon: StaticImageData;
  percentage: number;
}

type SkillCardProps = {
  skill: Skill;
};

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <div className="flex flex-col justify-center items-center my-3 rounded-full ">
      <Image
        src={skill.icon}
        width={120}
        height={120}
        alt="skill_logo"
        className="rounded-full shadow-md shadow-slate-400 bg-contain"
      />
      <Progress
        percent={skill.percentage}
        size="small"
        className="w-1/2 mt-2 text-white"
        status="active"
        strokeColor="green"
        trailColor="white"
      />
    </div>
  );
};

export default SkillCard;
