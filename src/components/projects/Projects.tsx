"use client";

import React from "react";
import ImageContainer from "../container/ImageContainer";
import Button from "../button/Button";
import { lusitana } from "@/fonts/fonts";
import { professionalProjects, projects } from "@/constants/data";
import FlipCard from "../flipCard/FlipCard";
import Image from "next/image";
import clsx from "clsx";
import { Popover } from "antd";

type TabsType = "Professional" | "Personal";

type ProjectsProps = {
  isLandingPage: boolean;
};
const Projects: React.FC<ProjectsProps> = ({ isLandingPage = false }) => {
  const [toogleProjects, setToggleProjects] =
    React.useState<TabsType>("Professional");

  const slicedProfProjects = isLandingPage
    ? professionalProjects.slice(0, 4)
    : professionalProjects;
  const slicedProjects = isLandingPage ? projects.slice(0, 3) : projects;

  const frontContent = (image: string) => (
    <Image
      className="rounded-md w-full h-full bg-cover"
      src={image}
      width={300}
      height={300}
      alt="logo"
      style={{
        height: "100%",
      }}
    />
  );

  const popoverContent = (desc: string) => <p className="px-4">{desc}</p>;

  const backContent = (project: any) => (
    <div className="p-5 bg-com-primary h-full w-full flex flex-col rounded-lg relative">
      <h3 className={`${lusitana.className} text-2xl font-bold tracking-wider`}>
        {project.title}
      </h3>
      <p
        className={clsx(
          "text-sm text-white-100 mt-2 ",
          project.isRadiantWays ? "line-clamp-2" : "line-clamp-3"
        )}
      >
        {project.desc}.
      </p>
      <span className="mt-0.5">
        <Popover content={popoverContent(project.desc)} placement="top">
          {" "}
          read more
        </Popover>
      </span>
      <p className="mt-3">
        <span className="font-bold">Tech Stack : &nbsp;</span>
        {project.techStack.map((tag: any, i: any) => {
          const lastItem = project.techStack.length - 1 === i;
          return (
            <span key={i} className={`${tag.color} `}>
              {tag.name}
              {lastItem ? "" : ","}
              &nbsp;
            </span>
          );
        })}
      </p>
      <div className="absolute bottom-4">
        <Button
          text="Live Demo"
          size="md"
          variant="secondary"
          isLink
          path={project.demoLink}
        />
      </div>
    </div>
  );
  return (
    <div className="flex justify-center flex-col items-center mt-10">
      <h2
        className={`${lusitana.className} text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-wider`}
      >
        Projects
      </h2>
      <div className="flex mt-8 border-b-2">
        <Button
          text="Professional"
          size={toogleProjects === "Professional" ? "lg" : "out"}
          onClick={() => setToggleProjects("Professional")}
          customClassNames="rounded-b-none"
          variant={toogleProjects === "Professional" ? "secondary" : "out"}
        />
        <Button
          text="Personal"
          size={toogleProjects === "Personal" ? "lg" : "out"}
          onClick={() => setToggleProjects("Personal")}
          customClassNames="rounded-b-none"
          variant={toogleProjects === "Personal" ? "secondary" : "out"}
        />
      </div>
      {toogleProjects === "Professional" && (
        <>
          {/* Professional Projects */}
          <div className="hidden md:block rounded">
            {slicedProfProjects.map((project, index) => {
              const isLast = slicedProfProjects.length - 1;
              return (
                <div
                  className={clsx(
                    "flex mt-20 pb-5 justify-center even:flex-row-reverse",
                    isLast === index ? "" : "border-b-2"
                  )}
                  key={index}
                >
                  <div className="w-1/2 relative">
                    <h3
                      className={`${lusitana.className} text-3xl font-bold tracking-wider`}
                    >
                      {project.title}
                    </h3>
                    <p className="text-lg text-white-100 mt-4">
                      {project.desc}.
                    </p>
                    <p className="mt-3">
                      <span className="font-bold">Tech Stack : &nbsp;</span>
                      {project.techStack.map((tag, i) => {
                        const lastItem = project.techStack.length - 1 === i;
                        return (
                          <span key={i} className={`${tag.color}`}>
                            {tag.name}
                            {lastItem ? "" : ","}
                            &nbsp;
                          </span>
                        );
                      })}
                    </p>
                    <div className="absolute bottom-3">
                      <Button
                        text="Live Demo"
                        size="lg"
                        isLink
                        path={project.demoLink}
                      />
                    </div>
                  </div>
                  <div className="mr-5">
                    <ImageContainer section image={project.image} />
                  </div>
                </div>
              );
            })}
          </div>
          {/* For Mobile */}
          <div className="block md:hidden mt-4">
            {slicedProfProjects.map((project, i) => (
              <div key={i} className="">
                <h4 className="text-lg font-semibold text-com-gray">
                  {project.title}
                </h4>
                <div className="relative mt-16 mb-12">
                  <div className="w-80 h-80 border-[10px] mx-8 rounded-md" />
                  <div className="absolute -top-8 right-0 rounded-md">
                    <FlipCard
                      frontContent={frontContent(project.image)}
                      backContent={backContent(project)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
      {toogleProjects === "Personal" && (
        <>
          {/* Personal Projects */}
          <div className="hidden md:block">
            {slicedProjects.map((project, index) => {
              const isLast = slicedProjects.length - 1;
              return (
                <div
                  className={clsx(
                    "flex mt-20 pb-5 justify-center even:flex-row-reverse",
                    isLast === index ? "" : "border-b-2"
                  )}
                  key={index}
                >
                  <div className="w-1/2 relative">
                    <h3
                      className={`${lusitana.className} text-3xl font-bold tracking-wider`}
                    >
                      {project.title}
                    </h3>
                    <p className="text-lg text-white-100 mt-4">
                      {project.desc}.
                    </p>
                    <p className="mt-3">
                      <span className="font-bold">Tech Stack : &nbsp;</span>
                      {project.techStack.map((tag, i) => {
                        const lastItem = project.techStack.length - 1 === i;
                        return (
                          <span key={i} className={`${tag.color}`}>
                            {tag.name}
                            {lastItem ? "" : ","}
                            &nbsp;
                          </span>
                        );
                      })}
                    </p>
                    <div className="absolute bottom-3">
                      <Button
                        text="Live Demo"
                        size="lg"
                        isLink
                        path={project.demoLink}
                      />
                    </div>
                  </div>
                  <div className="mr-5">
                    <ImageContainer section image={project.image} />
                  </div>
                </div>
              );
            })}
          </div>
          {/* For Mobile */}
          <div className="block md:hidden mt-4">
            {slicedProjects.map((project, i) => (
              <div key={i} className="">
                <h4 className="text-lg font-semibold text-com-gray">
                  {project.title}
                </h4>
                <div className="relative mt-16 mb-12">
                  <div className="w-80 h-80 border-[10px] mx-8 rounded-md" />
                  <div className="absolute -top-8 right-0 rounded-md">
                    <FlipCard
                      frontContent={frontContent(project.image)}
                      backContent={backContent(project)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {isLandingPage && (
        <div className="mt-2 md:mt-10">
          <Button
            text="View All Projects"
            size="lg"
            variant="secondary"
            isLink
            path="/projects"
          />
        </div>
      )}
    </div>
  );
};

export default Projects;
