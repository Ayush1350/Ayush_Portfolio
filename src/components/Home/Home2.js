import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.JPG";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

function Home2() {
  return (
    <Container fluid className="home-about-section bg-dark text-light" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="text-warning"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hello, my name is Ayush Patel. I have a{" "}
              <b className="text-warning">
                Bachelor's degree in Computer Engineering.
              </b>
              <br />
              <br />I have a strong background in web development, with
              expertise in{" "}
              <i>
                <b className="text-warning">
                  HTML, CSS, JavaScript, and React.
                </b>
              </i>{" "}
              Additionally, I am proficient in backend technologies such as{" "}
              <i>
                <b className="text-warning">Express.js and Node.js.</b>
              </i>
              <br />
              <br />I enjoy creating efficient, user-friendly applications and
              constantly learning new technologies to improve my skills.{" "}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
                style={{ borderRadius: "50%", width: "90%" }}
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="text-warning">connect </span>with
              me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Ayush1350"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ayush-patel-206857192/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:ayushpatel2492002@gmail.com"
                  className="icon-colour home-social-icons"
                >
                  <MdEmail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="tel:+919408157601"
                  className="icon-colour home-social-icons"
                >
                  <IoCall />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
