import React, { Component } from "react";
import Pdf from "../../assets/pdf/resume.pdf";

class Download extends Component {
  render() {
    return (
      <a href={Pdf} target="_blank" rel="noreferrer">
        {this.props.children}
      </a>
    );
  }
}

export default Download;
