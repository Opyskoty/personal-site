import React from "react";
import "./About.css";
import {
  Container,
  Row,
  Col,
} from "reactstrap";
import Image from "./LinkedIn.jpeg";

function About() {
  return (
    <div className="About">
      <Container>
        <Row>
          <Col xs="6">
            <h3>About Me</h3>
          </Col>
          <Col xs="6">
            <img src={Image} alt="Olivia" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default About;
