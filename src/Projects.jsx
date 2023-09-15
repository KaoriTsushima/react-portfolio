import React from "react";
import "./Projects.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
export default function Projects() {
  return (
    <div className="projects pt-3">
      <h1>Projects</h1>
      <div className="d-flex align-items-center justify-content-center gap-5">
        <div>
          <Card style={{ width: "18rem", height: "450px" }}>
            <Card.Img
              variant="top"
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/097/231/original/japanese-recipes.jpg?1694782503"
              width="100%"
              height={200}
            />
            <Card.Body>
              <Card.Title>Japanese Recipes</Card.Title>
              <Card.Text>
                I created this app for people who are interested in cooking
                Japanese food.
                <br />
                <strong>Key Skills</strong>: React, Responsive wed development,
                Bootstrap
              </Card.Text>
              <a
                href="https://profound-heliotrope-1c34b6.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="primary">Launch App</Button>
              </a>
            </Card.Body>
          </Card>
        </div>

        <div>
          <Card style={{ width: "18rem", height: "450px" }}>
            <Card.Img
              variant="top"
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/097/233/original/dictionary.jpg?1694783456"
              width="100%"
              height={200}
            />
            <Card.Body>
              <Card.Title>Dictionary</Card.Title>
              <Card.Text>
                I created this app as a project from SheCodes course.
                <br />
                <strong>Key Skills</strong>: React, API, Responsive wed
                development
              </Card.Text>
              <a
                href="https://cerulean-sorbet-eba7d6.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="primary">Launch App</Button>
              </a>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
