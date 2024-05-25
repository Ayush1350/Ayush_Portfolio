import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import myImg from "../../Assets/avatar.JPG";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section bg-dark text-light">
      {/* <Particle /> */}
      <Container>
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
              About <strong className="text-warning">Me</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={myImg} className="img-fluid" alt="avatar" style={{ borderRadius: "45%", width: "60%" }} />

          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="text-warning">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="text-warning">Tools</strong> I use
        </h1>
        <Toolstack />

      </Container>
    </Container>
  );
}

export default About;
