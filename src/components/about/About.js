import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Aboutcard from "./Aboutcard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import Techstack from "./Techstack";
import "./About.css";
import Particle from "../home/Particle";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Particle />
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col md={5} style={{ paddingBottom: "150px" }} className="about-img">
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Techstack />
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
