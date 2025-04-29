"use client";

import { usePDF } from "react-to-pdf";
import Button from "@/components/button/Button";
import Resume from "@/components/resume/Resume";
import React from "react";

function ResumePage() {
  const { toPDF, targetRef } = usePDF({ filename: "Hemanth Babu S.pdf" });
  return (
    <div>
      <div className="hidden sm:block">
        <div className="flex justify-end mb-5 ">
          <Button
            text="Download Resume"
            size="lg"
            onClick={() => toPDF()}
            variant="secondary"
          />
        </div>
      </div>
      <div ref={targetRef}>
        <Resume />
      </div>
    </div>
  );
}

export default ResumePage;
