import React from "react";
import "./AboutMe.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
export default function AboutMe() {
  return (
    <div className="about-me">
      <h1>About me</h1>
      <div className="d-flex flex-wrap align-items-center justify-content-center gap-5 mt-5 mb-5 ms-2 me-2">
        <div className="about-me-contents">
          <p>I'm Kaori Tsushima from Japan. </p>
          <p>I'm a React Front-end Developer based in Glasgow, UK.</p>
          <p>
            I learned front-end development skills and graduated from{" "}
            <a
              href="https://www.shecodes.io/graduates/90371-kaori-tsushima"
              target="_blank"
              rel="noreferrer"
            >
              SheCodes Max
            </a>{" "}
            course in August 2023.
          </p>
          <p>
            Also, I learned SQL, Python, and basic knowledge of Java through{" "}
            <a
              href="https://codefirstgirls.com/"
              target="_blank"
              rel="noreferrer"
            >
              Code First Girls
            </a>{" "}
            and{" "}
            <a
              href="https://www.freecodecamp.org/"
              target="_blank"
              rel="noreferrer"
            >
              FreeCodeCamp
            </a>
            .
          </p>
          <p>I love to keep learning and try new things.</p>
          <p>In fact, I'm a career switcher from in Nursing.</p>
          <p>
            Finally, I like playing chess, musical instruments (e.g. piano and
            clarinet), and with my pets (dog and two rabbits).
          </p>
          <p>If you are interested in me, feel free to contact me!</p>
        </div>
        <div>
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/097/210/original/about-me-photo.JPG?1694770491"
            alt="about-me"
            className="photo"
          />
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
    </div>
  );
}
