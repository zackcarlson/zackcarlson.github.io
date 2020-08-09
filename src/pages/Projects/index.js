import React from "react";
import "./index.css";
import repoIcon from "../../assets/images/repoIcon.svg";
import liveIcon from "../../assets/images/liveIcon.svg";
import googleKeep from "../../assets/images/googlekeep.png";
import volunteer from "../../assets/images/volunteerrocks.png";
import oneMan from "../../assets/images/oneman.png";

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
    },
  ];
  return (
    <div className="Projects--container" id="projects-section">
      <div className="Projects--title">Applications</div>
      <div className="Projects--subtitle">
        Check out some featured projects I’ve built over the years.
      </div>
      <ul className="Projects--list">
        {projects &&
          projects.map(
            (
              { name, techList, liveLink, repoLink, imageSrc, classname },
              i
            ) => (
              <li key={`${i} ${name}`} title={name}>
                <div className="Projects--detailsWrapper">
                  <div className="Projects--listTitle">{name}</div>
                  <a
                    className="Projects--screenshotWrapper"
                    href={liveLink}
                    target="_blank"
                  >
                    <div className={`Projects--projectName ${classname}`}></div>
                  </a>
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
                    <a href={liveLink} target="_blank">
                      <img src={liveIcon} alt="live" />
                    </a>
                    <a href={repoLink} target="_blank">
                      <img src={repoIcon} alt="repo" />
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
