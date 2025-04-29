"use client";

import React from "react";
import ImageContainer from "../container/ImageContainer";
import Button from "../button/Button";
import FlipCard from "../flipCard/FlipCard";
import Image from "next/image";
import { aboutMe } from "@/constants/data";
import { lusitana } from "@/fonts/fonts";

type Props = {};

const About = (props: Props) => {
  const frontContent = () => (
    <Image
      className="rounded-md h-full"
      src="/developer.png"
      width={300}
      height={300}
      alt="logo"
      style={{
        height: "100%",
      }}
      priority
    />
  );

  const backContent = () => (
    <div className="p-5 bg-com-primary h-full w-full flex flex-col">
      <h3 className={`${lusitana.className} text-2xl font-bold tracking-wider`}>
        {aboutMe.title}
      </h3>
      <p className="text-sm text-white-100 mt-2">{aboutMe.desc}</p>
    </div>
  );

  return (
    <div className="mt-5 md:mt-0">
      <div className="hidden md:block">
        <div className="flex flex-row gap-x-8 ">
          <ImageContainer image="/developer.png" />

          <div className="flex flex-col gap-5 w-1/2">
            <h3
              className={`${lusitana.className} text-5xl font-bold tracking-wider`}
            >
              {aboutMe.title}
            </h3>
            <p className="text-lg text-white-100">{aboutMe.desc}</p>
            <div className="flex flex-row gap-x-5">
              <Button
                text="HIRE ME"
                size="lg"
                isLink
                path="tel:+91 9490980700"
              />
              <Button text="RESUME" size="lg" isLink path="/resume" />
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden relative">
        <div className="w-80 h-80 border-[10px] mx-8 rounded-md" />
        <div className="absolute -top-8 left-0 rounded-md">
          <FlipCard frontContent={frontContent()} backContent={backContent()} />
        </div>
        <div className="flex flex-row gap-x-5 mt-5 justify-center items-center">
          <Button text="HIRE ME" size="lg" isLink path="tel:+91 9490980700" />
          <Button text="RESUME" size="lg" isLink path="/resume" />
        </div>
      </div>
    </div>
  );
};

export default About;
