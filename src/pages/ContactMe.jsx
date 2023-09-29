import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../styles//ContactMe.css";
export default function CntactMe() {
  return (
    <div className="contact-me pt-3 pb-4">
      <h1>Contact me</h1>
      <div className="d-flex flex-column flex-wrap align-items-center justify-content-center gap-4 mt-5">
        <div>
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/097/563/original/self-photo.png?1695044940"
            alt="contact-me"
            height={200}
            width="100%"
            className="image"
          />
        </div>
        <div className="contact-details">
          <h2>Contact Details</h2>
          <div className="d-flex flex-row justify-content-start gap-3 mt-4">
            <div>
              <a
                href="mailto:kaoritsushima0107@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="icon-color"
              >
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
              </a>
            </div>
            <div>
              <h4>kaoritsushima0107@gmail.com</h4>
            </div>
          </div>
          <div className="d-flex flex-row justify-content-start gap-3">
            <div>
              <a
                href="https://www.linkedin.com/in/kaori-tsushima/"
                target="_blank"
                rel="noreferrer"
                className="icon-color"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
            <div>
              <h4> https://www.linkedin.com/in/kaori-tsushima/</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
