import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import { useSelector } from "react-redux";
import "./Projects.css";
import Particle from "../home/Particle";

function Projects() {
  const projectlist = useSelector((state) => state?.myData?.projects);

  return (
    <Container fluid className="project-section">
      <Container>
        <Particle />
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectlist &&
            projectlist.map((data) => {
              return (
                <Col md={4} className="project-card">
                  <ProjectCard
                    imgPath={data.imgPath}
                    isBlog={data.isBlog}
                    title={data.title}
                    description={data.description}
                    ghLink={data.ghLink}
                    demoLink={data.demoLink}
                  />
                </Col>
              );
            })}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
