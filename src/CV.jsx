import React from "react";
import "./CV.css";
import myCV from "./Resume-Kaori.pdf";

export default function CV() {
  return (
    <div className="cv pt-3 pb-4">
      <h1>CV</h1>

      <a
        href={myCV}
        download="Resume-Kaori.pdf"
        class="btn btn-primary"
        role="button"
        target="_blank"
      >
        Download CV
      </a>
      <div className="d-flex flex-wrap align-items-center justify-content-center gap-4 mt-5">
        <div className="d-flex flex-column gap-3 cv-contents">
          <div>
            <h2>Education</h2>
            <div className="education-contents">
              <h3>SheCodes</h3>
              <h4>Front-end Development</h4>
              <p>Mar 2023 - Aug 2023</p>
              <h3>University of Glasgow</h3>
              <h4>MSc in Global Health</h4>
              <p>Sep 2019 - Dec 2020 Glasgow, UK</p>
              <h3>Tokyo Healthcare University</h3>
              <h4>Bachelor of Nursing</h4>
              <p>Apr 2006 - Mar 2010 Tokyo, Japan</p>
            </div>
          </div>
          <div>
            <h2>Skills</h2>
            <ul>
              <li>React, JavaScript, Node.js, HTML, CSS</li>
              <li>Python, Java (basic knowledge)</li>
              <li>MySQL, SQLite, Dynamodb (AWS), MongoDB</li>
              <li>Responsive Wed Development</li>
              <li>Bootstrap, Figma</li>
              <li>Git, GitHub</li>
              <li>Jira, Nvivo</li>
              <li>Great Team Working</li>
              <li>Problem-solving</li>
              <li>Great Time Management</li>
            </ul>
          </div>
          <div>
            <h2>Additional Information</h2>
            <ul>
              <li>
                Play Chess / Japanese Chess <i class="fa-solid fa-chess"></i>{" "}
              </li>
              <li>
                Play Piano and Clarinet <i class="fa-solid fa-music"></i>
              </li>
              <li>
                Love Chocolate <i class="fa-solid fa-mug-hot"></i>
              </li>
              <li>
                Love Animals <i class="fa-solid fa-paw"></i>
              </li>
              <li>
                Great Nursing Skills <i class="fa-solid fa-user-nurse"></i>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h2>Work Experience</h2>
        </div>
      </div>
    </div>
  );
}
