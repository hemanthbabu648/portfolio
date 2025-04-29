import React from "react";

type Points = {
  title: string;
  text: string;
};
interface Experience {
  id: number;
  title: string;
  desc: string;
  company_name: string;
  date: string;
  points: Points[];
  status: string;
}

type ExperienceCardProps = {
  experience: Experience;
  isLabel: boolean;
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  isLabel,
}) => {
  return (
    <div className="shadow-lg shadow-slate-500 text-white min-h-96 rounded-lg p-4 text-start">
      <div className="flex justify-between ">
        <div>
          <h5 className="text-xl font-bold">{experience.company_name}</h5>
          <p className="text-lg  text-white">{experience.title}</p>
          {!isLabel && <p className="text-lg  text-white">{experience.date}</p>}
        </div>
        <div></div>
      </div>
      <div className="mt-5">
        <p className="text-sm lg:text-base text-white-100 pb-4">
          {experience.desc}
        </p>
      </div>
      <div>
        <h6 className="text-lg text-white">Key Responsibilities:</h6>
        <ul className=" list-disc px-10 py-1">
          {experience?.points?.map((point) => (
            <li key={point.title} className="text-light-100">
              <p>
                <span className="font-medium">{point.title}</span>:&nbsp;
                {point.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
