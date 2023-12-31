import React from "react";
import "../styles/CV.css";
import myCV from "../Resume-Kaori.pdf";
import WorkExperience from "./WorkExperience";

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
        rel="noreferrer"
      >
        Download CV
      </a>
      <div className="d-flex flex-wrap align-items-start justify-content-center gap-5 mt-5 ">
        <div className="d-flex flex-column gap-3  cv-contents">
          <div>
            <h2>Education</h2>
            <div className="education-contents">
              <h3>SheCodes</h3>
              <h4>Front-end Development</h4>
              <p>
                Mar 2023 - Aug 2023 <strong>Online, UK</strong>
              </p>
              <h3>University of Glasgow</h3>
              <h4>MSc in Global Health</h4>
              <p>
                Sep 2019 - Dec 2020 <strong>Glasgow, UK</strong>
              </p>
              <h3>Tokyo Healthcare University</h3>
              <h4>Bachelor of Nursing</h4>
              <p>
                Apr 2006 - Mar 2010 <strong>Tokyo, Japan</strong>
              </p>
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
                Native Japanese <i class="fa-solid fa-bowl-rice"></i>
              </li>
              <li>
                English (IELTS: 6.5) <i class="fa-solid fa-language"></i>
              </li>
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
                Great Nursing Skills (including BLS){" "}
                <i class="fa-solid fa-user-nurse"></i>
              </li>
            </ul>
          </div>
        </div>
        <div className="cv-contents">
          <h2>Work Experience</h2>
          <WorkExperience />
        </div>
      </div>
    </div>
  );
}
