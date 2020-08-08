import React from "react";
import './index.css';
import angular from "../../assets/images/angular.svg";
import bootstrap from "../../assets/images/bootstrap.svg";
import css3 from "../../assets/images/css3.svg";
import html5 from "../../assets/images/html5.svg";
import javascript from "../../assets/images/javascript.svg";
import jquery from "../../assets/images/jquery.svg";
import materialize from "../../assets/images/materialize.svg";
import node from "../../assets/images/node.svg";
import react from "../../assets/images/react.svg";
import redux from "../../assets/images/redux.svg";
import sass from "../../assets/images/sass.svg";
import typescript from "../../assets/images/typescript.svg";

export const Skills = () => {
  const techNames = ["angular", "bootstrap", "css3", "html5", "javascript", "jquery", "materialize", "node", "react", "redux", "sass", "typescript"];
  const techLogos = [angular, bootstrap, css3, html5, javascript, jquery, materialize, node, react, redux, sass, typescript];
  return (
    <div className="skillsPage">
      <div className="title">Skills</div>
      <div className="subtitle">Over 3 years of full stack experience using these technologies.</div>
      <ul className="techList">
        {techNames.map((name, i) => (
          <li key={`${i} ${name}`}>
            <img src={techLogos[i]} alt={name} title={name} />
          </li>
        ))}
      </ul>
    </div>
  );
};
