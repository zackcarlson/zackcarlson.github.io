import React from "react";
import cartoon from "../../assets/images/zack-computer.svg";
import { FaGithubAlt, FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import "./index.css";

export const Landing = (props) => {
  return (
    <div className="Landing--container" id="landing-section">
      <div className="Landing--intro">
        <h1>Zack Carlson</h1>
        <h2>Frontend Software Engineer</h2>
        <p className="Landing--details">
          Specialized in designing elegant, user-friendly interfaces from rainy,
          Seattle, Washington.
        </p>
        <div className="Landing--icons">
          <a
            href="https://github.com/zackcarlson"
            target="_blank"
            rel="noreferrer"
          >
            <span className="Landing--icon">
              <FaGithubAlt size={30} />
            </span>
          </a>
          <a href="mailto:zackt.carlson@gmail.com">
            <span className="Landing--icon">
              <MdMail size={30} />
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/zack-carlson/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="Landing--icon">
              <FaLinkedin size={30} />
            </span>
          </a>
        </div>
      </div>
      <div className="Landing--cartoon-wrapper">
        <img src={cartoon} alt="Author Cartoon" className="Landing--cartoon" />
      </div>
    </div>
  );
};
