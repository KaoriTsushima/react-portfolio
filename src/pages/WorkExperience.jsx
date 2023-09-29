import React from "react";
import "../styles//WorkExperience.css";
import { workData } from "../workData.js";

export default function WorkExperience() {
  return workData.map((data) => (
    <div className="work-details">
      <h3>{data.company}</h3>
      <h4>{data.role}</h4>
      <p>
        {data.startEnd} <strong>{data.location}</strong>
      </p>
      <ul>
        {data.duties.map(function (duty) {
          return <li>{duty}</li>;
        })}
      </ul>
    </div>
  ));
}
