import React from "react";
import "./index.css";
import { Angular } from "@styled-icons/fa-brands/Angular";
import { Bootstrap } from "@styled-icons/boxicons-logos/Bootstrap";
import { LogoCss3 } from "@styled-icons/ionicons-solid/LogoCss3";
import { Html5 } from "@styled-icons/fa-brands/Html5";
import { Javascript } from "@styled-icons/simple-icons/Javascript";
import { Jquery } from "@styled-icons/simple-icons/Jquery";
import { DiMaterializecss } from "react-icons/di";
import { Nodejs } from "@styled-icons/boxicons-logos/Nodejs";
import { ReactLogo } from "@styled-icons/fa-brands/ReactLogo";
import { Redux } from "@styled-icons/simple-icons/Redux";
import { Sass } from "@styled-icons/boxicons-logos/Sass";
import { Typescript } from "@styled-icons/simple-icons/Typescript";
import styled from "styled-components";
import { StyledIconBase } from "@styled-icons/styled-icon";

export const IconStyleWrapper = styled.div`
  ${StyledIconBase} {
    color: #d0d0d0;
    padding: 15px;
  }
`;

export const Skills = () => {
  const techNames = [
    "angular",
    "bootstrap",
    "css3",
    "html5",
    "javascript",
    "jquery",
    "materialize",
    "node",
    "react",
    "redux",
    "sass",
    "typescript",
  ];
  const techLogos = [
    <Angular key="Angular0" size="70" />,
    <Bootstrap key="Bootstrap1" size="70" />,
    <LogoCss3 key="LogoCss32" size="70" />,
    <Html5 key="Html53" size="70" />,
    <Javascript key="Javascript4" size="70" />,
    <Jquery key="Jquery5" size="70" />,
    <DiMaterializecss
      key="DiMaterializecss6"
      size="70"
      color="#d0d0d0"
      className="Skills--tech"
    />,
    <Nodejs key="Nodejs7" size="70" />,
    <ReactLogo key="ReactLogo8" size="70" />,
    <Redux key="Redux9" size="70" />,
    <Sass key="Sass10" size="70" />,
    <Typescript key="Typescript11" size="70" />,
  ];
  return (
    <div className="Skills--container" id="skills-section">
      <div className="Skills--title">Skills</div>
      <div className="Skills--subtitle">
        Over 3 years of full stack experience using these technologies.
      </div>
      <ul className="Skills--techList">
        {techNames.map((name, i) => (
          <li
            key={`${i} ${name}`}
            title={name}
            className="Skills--tech-wrapper"
          >
            <IconStyleWrapper>{techLogos[i]}</IconStyleWrapper>
          </li>
        ))}
      </ul>
    </div>
  );
};
