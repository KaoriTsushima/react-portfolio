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
    </div>
  );
}
