import React from "react";
import logo from "../../assets/images/zack-logo.svg";
import "./index.css";

export const Nav = () => {
  return (
    <div className="Nav--container">
      <span className="Nav--logo">
        <svg
          width="50"
          height="50"
          viewBox="0 0 296 294"
          xmlns="http://www.w3.org/2000/svg"
          id="zack-logo"
        >
          <path
            d="M165.641 100.594V99.1094L150.875 99.6562H105.406L107.75 87.5469H182.906V94.1875L128.141 179.109L120.563 188.953V190.516L135.25 189.891H187.828L185.484 202H102.828V195.984L158.063 110.516L165.641 100.594Z"
            fill="#93AF93"
          />
          <rect
            x="0.0862267"
            y="4.94001"
            width="199.902"
            height="201.383"
            rx="41.5"
            transform="matrix(0.720598 0.693353 -0.695962 0.718079 149.396 2.24172)"
            stroke="#93AF93"
            stroke-width="7"
          />
        </svg>
      </span>
      <span className="Nav--links">
        <span className="Nav--linkItem">Skills</span>
        <span className="Nav--linkItem">Projects</span>
        <span className="Nav--linkItem resume">Resume</span>
      </span>
    </div>
  );
};
