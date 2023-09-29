import React from "react";
import "../styles/Home.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="home-container d-flex flex-row flex-wrap align-items-center justify-content-center gap-5">
      <div className="w-50 picture-container">
        <img
          src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/097/076/original/my-pic.jpg?1694701884"
          alt="me"
          className="my-picture"
        />
      </div>
      <div className="greeting ">
        <h4>Hello,</h4>
        <h1>
          I'm <strong>Kaori Tsushima</strong>
        </h1>
        <h2>React Front-end Developer</h2>
        <h3>Based in Glasgow, UK</h3>

        <div className="d-flex gap-3 justify-content-center mt-4">
          <a
            href="https://www.linkedin.com/in/kaori-tsushima/"
            target="_blank"
            rel="noreferrer"
            className="icon-color"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://github.com/KaoriTsushima"
            target="_blank"
            rel="noreferrer"
            className="icon-color"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="mailto:kaoritsushima0107@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="icon-color"
          >
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
        </div>
      </div>
    </div>
  );
}
