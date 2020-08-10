import React, { Component } from "react";
import classnames from "classnames";
import Download from "../Download";
import "./index.css";

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true,
    };
  }

  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // Hide or show the menu.
  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = Math.abs(prevScrollpos) > Math.abs(currentScrollPos);

    this.setState({
      prevScrollpos: currentScrollPos,
      visible,
    });
  };

  render() {
    return (
      <div
        className={classnames("Nav--container", {
          "--hidden": !this.state.visible,
          "--boxshadow": this.state.prevScrollpos > 0 && this.state.visible,
        })}
      >
        <a href="#landing-section">
          <span className="Nav--logo">
            <svg
              width="50"
              height="50"
              viewBox="0 0 175 146"
              xmlns="http://www.w3.org/2000/svg"
              id="zack-logo"
            >
              <path
                d="M0.25 145.031V0.96875H42.5156V15.4219H14.625V130.578H42.5156V145.031H0.25ZM51.5781 107.062L84.3906 56.9062L92.3594 46.3594V44.7969L77.8281 45.3438H54L57.5938 30.1875H120.719V36.125L87.9062 85.9688L79.7031 96.9844V98.4688L93.5312 97.8438H122.984L119.391 113H51.5781V107.062ZM132.203 130.578H160.016V15.4219H132.203V0.96875H174.391V145.031H132.203V130.578Z"
                fill="#93AF93"
              />
            </svg>
          </span>
        </a>
        <span className="Nav--links">
          <a href="#skills-section">
            <span className="Nav--linkItem">Skills</span>
          </a>
          <a href="#projects-section">
            <span className="Nav--linkItem">Projects</span>
          </a>
          <Download>
            <span className="Nav--linkItem resume">Resume</span>
          </Download>
        </span>
      </div>
    );
  }
}
