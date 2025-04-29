import { lusitana } from "@/fonts/fonts";
import { Col, Row } from "antd";
import React from "react";
import SkillCard from "./SkillCard";
import { skills } from "@/constants/data";

type Props = {};

const Skills = (props: Props) => {
  const style: React.CSSProperties = {
    background: "#0092ff",
    padding: "8px 0",
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <h2
        className={`${lusitana.className} text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-wider`}
      >
        Skills
      </h2>
      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        className="w-full mt-5 md:mt-10"
        wrap={true}
      >
        {skills.map((skill) => (
          <Col className="gutter-row" xs={12} md={6} key={skill.id}>
            <SkillCard skill={skill} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Skills;
