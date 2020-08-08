import React from "react";
import './index.css';
import repoIcon from '../../assets/images/repoIcon.svg';
import liveIcon from '../../assets/images/liveIcon.svg';

export const Projects = () => {
  const projects = [
    {
      name: "Google Keep Clone",
      techList: ["HTML", "CSS", "React", "JavaScript", "Node", "Express", "jQuery", "Bootstrap", "Mongoose"],
      liveLink: "https://gkeep-clone.herokuapp.com/?",
      repoLink: "https://github.com/zackcarlson/google-keep-clone?",
      image: '',
    },
    {
      name: "Volunteer Rocks",
      techList: ["HTML", "CSS", "React", "JavaScript", "Node", "Express", "Axios", "Mongoose"],
      liveLink: "https://volunteerrocks.herokuapp.com/?",
      repoLink: "https://github.com/zackcarlson/volunteer-rocks?",
      image: '',
    },
    {
      name: "One Man's Treasure",
      techList: ["HTML", "CSS", "React", "JavaScript", "Node", "Express", "Axios", "Mongoose", "Semantic UI"],
      liveLink: "https://sheltered-retreat-50643.herokuapp.com/?",
      repoLink: "https://github.com/zackcarlson/one-mans-treasure?",
      image: '',
    },
  ];
  return (
    <div className="Projects--container">
      <div className="Projects--title">Applications</div>
      <div className="Projects--subtitle">Check out some featured projects I’ve built over the years.</div>
      <ul className="Projects--list">
        {projects.map(({name, techList, liveLink, repoLink, image}, i) => (
          <li key={`${i} ${name}`} title={name}>
            <div className="Projects--listTitle">{name}</div>
            <ul className="Projects--techList">
              {techList && techList.map((tech, i) => (
                <li key={`${i} ${tech}`}>
                  {tech}
                </li>
              ))}
            </ul>
            <img src={liveIcon} alt="live" />
            <img src={repoIcon} alt="repo" />
          </li>
        ))}
      </ul>
    </div>
  );
};
