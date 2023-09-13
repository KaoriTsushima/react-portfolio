import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Header() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light" sticky="top">
        <Container>
          <Navbar.Brand href="/">Kaori Tsushima</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="about-me">About me</Nav.Link>
            <Nav.Link href="projects">Projects</Nav.Link>
            <Nav.Link href="cv">CV</Nav.Link>
            <Nav.Link href="contact-me">Contact me</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
