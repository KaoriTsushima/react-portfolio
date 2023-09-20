import React from "react";
import "./CV.css";
import { Document } from "react-pdf";
export default function CV() {
  return (
    <div className="cv pt-3 pb-4">
      <h1>CV</h1>
      {/* <a
        class="btn btn-primary"
        role="button"
        target="_blank"
        href=".\Resume-Kaori.pdf"
      >
        <Document file="./Resume-Kaori.pdf" />
        Download CV
      </a> */}
    </div>
  );
}
