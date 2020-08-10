import React from "react";
import "./index.css";
import repoIcon from "../../assets/images/repoIcon.svg";
import liveIcon from "../../assets/images/liveIcon.svg";
import googleKeep from "../../assets/images/googlekeep.png";
import volunteer from "../../assets/images/volunteerrocks.png";
import oneMan from "../../assets/images/oneman.png";
import { FaGithub } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";

export const Projects = () => {
  const projects = [
    {
      name: "Google Keep Clone",
      techList: [
        "HTML",
        "CSS",
        "React",
        "JavaScript",
        "Node",
        "Express",
        "jQuery",
        "Bootstrap",
        "MongoDB",
      ],
      liveLink: "https://gkeep-clone.herokuapp.com/?",
      repoLink: "https://github.com/zackcarlson/google-keep-clone?",
      imageSrc: googleKeep,
      classname: "google",
      description: "A customizable notetaking app modeled after Google Keep.",
    },
    {
      name: "Volunteer Rocks",
      techList: [
        "HTML",
        "CSS",
        "React",
        "JavaScript",
        "Node",
        "Express",
        "Axios",
        "MongoDB",
      ],
      liveLink: "https://volunteerrocks.herokuapp.com/?",
      repoLink: "https://github.com/zackcarlson/volunteer-rocks?",
      imageSrc: volunteer,
      classname: "volunteer",
      description:
        "An application that locates volunteer opportunities near you.",
    },
    {
      name: "One Man's Treasure",
      techList: [
        "HTML",
        "CSS",
        "React",
        "JavaScript",
        "Node",
        "Express",
        "Axios",
        "MongoDB",
        "Semantic UI",
      ],
      liveLink: "https://sheltered-retreat-50643.herokuapp.com/?",
      repoLink: "https://github.com/zackcarlson/one-mans-treasure?",
      imageSrc: oneMan,
      classname: "oneMan",
      description:
        "An application for sellers to give away or trade away unwanted items.",
    },
  ];
  return (
    <div className="Projects--container" id="projects-section">
      <div className="Projects--title">Projects</div>
      <div className="Projects--subtitle">
        Check out some featured projects I’ve built over the years.
      </div>
      <ul className="Projects--list">
        {projects &&
          projects.map(
            ({ name, techList, liveLink, repoLink, description }, i) => (
              <li key={`${i} ${name}`} title={name}>
                <div className="Projects--detailsWrapper">
                  <div className="Projects--listTitle">{name}</div>
                  <div className="Projects--listDescription">{description}</div>
                  <ul className="Projects--techList">
                    {techList &&
                      techList.map((tech, i) => (
                        <li
                          className="Projects--techList--item"
                          key={`${i} ${tech}`}
                        >
                          {tech}
                        </li>
                      ))}
                  </ul>
                  <div className="Projects--linksWrapper">
                    <a href={liveLink} target="_blank" rel="noreferrer">
                      <BsBoxArrowUpRight size="25" style={{ fill: "white" }} />
                    </a>
                    <a href={repoLink} target="_blank" rel="noreferrer">
                      <FaGithub size="25" style={{ fill: "white" }} />
                    </a>
                  </div>
                </div>
              </li>
            )
          )}
      </ul>
    </div>
  );
};
