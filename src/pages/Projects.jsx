import React from "react";
import "../styles/Projects.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
export default function Projects() {
  return (
    <div className="projects pt-3 pb-5">
      <h1>Projects</h1>
      <div className="d-flex flex-wrap align-items-center justify-content-center gap-5 mt-5">
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
        <div>
          <Card style={{ width: "18rem", height: "450px" }}>
            <Card.Img
              variant="top"
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/097/433/original/weather.jpg?1694946488"
              width="100%"
              height={200}
            />
            <Card.Body>
              <Card.Title>Weather</Card.Title>
              <Card.Text>
                I created this app as a project from SheCodes course.
                <br />
                <strong>Key Skills</strong>: React, API, Responsive wed
                development
              </Card.Text>
              <a
                href="https://resilient-moonbeam-413d76.netlify.app"
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
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/097/436/original/rabbit-hole-cafe.jpg?1694947593"
              width="100%"
              height={200}
            />
            <Card.Body>
              <Card.Title>Rabbit Hole Cafe</Card.Title>
              <Card.Text>
                I created this app for my home cafe bar (
                <strong>Work in Progress</strong>).
                <br />
                <strong>Key Skills</strong>: React, Backend-Development, API,
                Responsive wed development, Bootstrap
              </Card.Text>
              <a
                href="https://github.com/KaoriTsushima"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="primary">View GitHub</Button>
              </a>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "18rem", height: "450px" }}>
            <Card.Img
              variant="top"
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/097/434/original/tokyo-travel.jpg?1694946833"
              width="100%"
              height={200}
            />
            <Card.Body>
              <Card.Title>Tokyo Travel</Card.Title>
              <Card.Text>
                I created this app as a project from SheCodes course.
                <br />
                <strong>Key Skills</strong>: Responsive wed development, HTML,
                CSS
              </Card.Text>
              <a
                href="https://ornate-stroopwafel-e69f1c.netlify.app"
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
