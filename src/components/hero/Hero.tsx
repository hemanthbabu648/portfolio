"use client";

import React from "react";
import { lusitana } from "../../fonts/fonts";
import { poppins } from "../../fonts/fonts";
import Button from "../button/Button";
import { scrollToSection } from "@/utils";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div>
      <p className={`${poppins.className} text-lg md:text-2xl text-com-gray`}>
        I&apos;m a
      </p>

      <p
        className={`text-5xl lg:text-8xl ${lusitana.className} font-bold tracking-wide`}
      >
        Front-end <br /> Developer{" "}
        <span className="w-2 h-2 bg-custom-gradient inline-block" />
      </p>
      <div className="my-5 mdmd:mt-8">
        <Button
          size="lg"
          text="Previous Projects"
          variant="primary"
          onClick={() => scrollToSection("projects")}
        />
      </div>
    </div>
  );
};

export default Hero;
