import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "./Particle";
import Type from "./Type";
import "./Home.css";
import Homeabout from "./Homeabout";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        {/* <Particle /> */}
        <Container className="home-content">
          <Row>
            <Col md={5} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Raveena Ginjala</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
            <Col md={7} style={{ paddingBottom: 20 }}>
              <img
                // src={homeLogo}
                src="https://media.giphy.com/media/YnS7j9pwnECXLMrI4t/giphy.gif"
                alt="home pic"
                className="img-fluid"
                style={{
                  maxHeight: "450px",
                  height: "700px",
                  width: "700px",
                  objectFit: "cover",
                }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Homeabout />
    </section>
  );
}

export default Home;
