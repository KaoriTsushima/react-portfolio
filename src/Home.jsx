import React from "react";
import "./Home.css";
// import ReactDOM from "react-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLinkedin } from "@fortawesome/free-solid-svg-icons";

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
        <h1>I'm Kaori Tsushima</h1>
        <h2>React Front-end Developer</h2>
        <h3>Based in Glasgow, UK</h3>
        {/* const element = <FontAwesomeIcon icon={faEnvelope} />
        ReactDOM.render(element, document.body) */}
        {/* <FontAwesomeIcon icon={faLinkedin} /> */}
      </div>
    </div>
  );
}
