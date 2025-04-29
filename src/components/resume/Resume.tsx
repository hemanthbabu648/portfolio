import React from "react";
import { IoMail } from "react-icons/io5";
import { FaLocationDot, FaLinkedin, FaPhoneFlip } from "react-icons/fa6";
import { IoDesktop } from "react-icons/io5";
import Link from "next/link";
import { resumeData } from "@/constants/resume";

const Resume = () => {
  const { header, skills, projects, experiences } = resumeData;
  return (
    <>
      <div className="bg-white text-com-primary" id="download-resume">
        {/* <!-- top content --> */}
        <div className="flex flex-col w-full">
          {/* <!-- About me --> */}
          <div className="p-2 md:p-5 bg-gray-500">
            <h1 className="font-bold text-2xl sm:text-4xl uppercase">
              {header.fullName}
            </h1>
            <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-com-secondary">
              {header.role}
            </h3>
            <p>{header.desc}</p>
          </div>
          <div className="p-2 md:p-5 bg-primary text-white flex flex-col md:flex-row gap-2">
            <div className="w-full md:w-1/2 space-y-1">
              <div className="flex items-center gap-2">
                <IoMail className="mr-a" />
                <Link href="mailto:hemanth170648@gmail.com">
                  hemanth170648@gmail.com
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <FaLocationDot className="mr-a mt-2" />
                Tirupati, Andhra Pradesh
              </div>
              <div className="flex items-center gap-2">
                <FaLinkedin className="mr-a" />
                <Link
                  href="https://www.linkedin.com/in/hemanthbabu648/"
                  target="_blank"
                >
                  linkedin.com/in/hemanthbabu648
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-1">
              <div className="flex items-center gap-2">
                <FaPhoneFlip className="mr-a" />
                <Link href="tel: +919490980700"> +91 9490980700</Link>
              </div>
              <div className="flex items-center gap-2">
                <IoDesktop className="mr-a" />
                <Link href="https://www.hemanth.radiantways.in" target="_blank">
                  hemanth.radiantways.in
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <IoDesktop className="mr-a" />
                <Link href="https://www.radiantways.in" target="_blank">
                  radiantways.in
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- main content --> */}
        <div className="p-2 md:p-5">
          <div className="flex flex-col sm:flex-row sm:mt-10">
            {/* <!-- Left Content --> */}
            <div className="flex flex-col sm:w-4/5 order-first sm:order-none sm:-mt-10">
              {/* <!-- Professional Experience --> */}
              <div className="py-3">
                <h2 className="text-lg font-bold text-top-color">
                  Professional Experience
                </h2>
                <div className="border-2 w-20 border-top-color my-3" />

                <div className="flex flex-col gap-5">
                  {experiences.map((item) => (
                    <div className="flex flex-col" key={item.id}>
                      <p className="text-lg font-bold">{item.title}</p>
                      <p className="text-lg font-bold">{item.company_name}</p>
                      <p className="font-semibold text-sm">{item.date}</p>
                      <p className="text-sm mt-2 w-11/12">{item.desc}</p>
                      <p className="font-semibold text-sm mt-2 mb-1">
                        Roles & Responsibilities
                      </p>
                      <ul className="text-sm list-disc pl-4 space-y-1 w-11/12">
                        {item.points.map((p) => (
                          <li key={p.title}>
                            <p>
                              <span className="font-semibold">
                                {p.title} :&nbsp;
                              </span>
                              {p.text}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* <!-- Projects --> */}
              <div className="py-3">
                <h2 className="text-lg font-poppins font-bold text-top-color">
                  Projects
                </h2>
                <div className="border-2 w-20 border-top-color my-3" />

                <div className="flex flex-col gap-2">
                  {projects.map((item, index) => (
                    <div className="flex flex-col" key={index}>
                      <p className="text-lg font-semibold ">
                        {item.title} <span>{item.duration}</span>
                      </p>
                      <ul className="text-sm list-disc pl-4 space-y-1 w-11/12">
                        {item.points.map((p) => (
                          <li key={p}>
                            <p className="text-sm">{p}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* <!-- Right Content --> */}
            <div className="flex flex-col sm:w-1/5">
              {/* <!-- Skills --> */}
              <div className="py-3 sm:order-none order-2">
                <h2 className="text-lg font-bold text-top-color">Skills</h2>
                <div className="border-2 w-20 border-top-color my-3" />
                <div className="flex flex-row flex-wrap gap-1">
                  {skills.map((item, index) => {
                    const isLast = skills.length - 1 === index;
                    return (
                      <div className="flex items-center my-1" key={item.id}>
                        <span>{item.resumeIcon}</span>
                        <div className="ml-1">{item.name}</div>
                        {isLast ? "" : ","}
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* <!-- Certifications --> */}
              <div className="py-3 sm:order-none order-1">
                <h2 className="text-lg font-bold text-top-color">
                  Certifications
                </h2>
                <div className="border-2 w-20 border-top-color my-3" />

                <div className="flex flex-col gap-3">
                  {resumeData.certifications.map((item) => (
                    <div className="flex flex-col" key={item.id}>
                      <p className="text-sm font-medium text-green-700">
                        {item.title}
                      </p>
                      <p className="font-semibold text-xs">
                        {item.startYear}-{item.endYear}
                      </p>
                      <p className="text-xs md:text-sm text-wrap">
                        Certification ID: &nbsp;{item.certificationId}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              {/* <!-- Education Background --> */}
              <div className="py-3 sm:order-none order-1">
                <h2 className="text-lg font-bold text-top-color">
                  Education Background
                </h2>
                <div className="border-2 w-20 border-top-color my-3" />

                <div className="flex flex-col space-y-1">
                  {resumeData.education.map((item) => (
                    <div className="flex flex-col" key={item.year}>
                      <p className="font-semibold text-xs">{item.year}</p>
                      <p className="text-sm font-medium text-green-700">
                        {item.branch}
                      </p>
                      <p className="text-sm">{item.institute}</p>
                      <p className="font-bold text-xs mb-2">
                        CGPA: {item.cgpa}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              {/* <!-- Languages --> */}
              <div className="py-3 sm:order-none order-1">
                <h2 className="text-lg font-bold text-top-color">Languages</h2>
                <div className="border-2 w-20 border-top-color my-3" />

                <div className="flex flex-col space-y-1">
                  <div className="flex flex-col gap-2">
                    <p className="text-sm">Telugu</p>
                    <p className="text-sm">English</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
