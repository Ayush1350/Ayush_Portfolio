import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Amazon from "../../Assets/Projects/Amazon.png";
import ChessGame from "../../Assets/Projects/Chess.png";
import ECommerce from "../../Assets/Projects/E-Commerce.png";
// import MedicineDonation from "../../Assets/Projects/MedicineDonation.png";
import Netflix from "../../Assets/Projects/Netflix.png";
import TravelWebsite from "../../Assets/Projects/TravelWebsite.png";
import VideoCallingApp from "../../Assets/Projects/VideoCallingApp.jpg";

function Projects() {
  return (
    <Container fluid className="project-section bg-dark text-light">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="text-warning">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={VideoCallingApp}
              title="Video Calling App"
              description="The Video Calling App is a real-time communication platform that allows users to initiate and participate in video calls over the internet. Utilizing WebRTC for peer-to-peer connections and Socket.io for signaling, the app provides a seamless and interactive experience for users to communicate face-to-face remotely."
              ghLink="https://github.com/Ayush1350/Video_Call_APP"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TravelWebsite}
              title="Travel Website"
              description="ExploreEra is a comprehensive tour and travel React project designed to simplify and enhance the travel booking
              experience. The platform provides users with the ability to seamlessly book flights, hotels, and holiday packages, all
              within a single application."
              ghLink="https://github.com/Ayush1350/Travel_Website"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ECommerce}
              title="E-Commerce"
              description="Enter the realm of modern shopping with our ReactJS-fueled E-commerce hub! Peruse, add to cart, delve into intricate
              product pages, and swiftly pinpoint your desired items using our intuitive search bar. Elevate your shopping escapade
              now!"
              ghLink="https://github.com/Ayush1350/E-Commerce_ReactJs_NodeJs"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ChessGame}
              title="Chess Game"
              description="This chess game application allows two players to play a game of chess with real-time interaction facilitated through Socket.io. The application supports different views for each player and a separate spectator view. The UI is built using EJS and styled with TailwindCSS, while the backend is powered by Express."
              ghLink="https://github.com/Ayush1350/Chess_Game"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Netflix}
              title="Netflix clone"
              description="Developed a Netflix clone using HTML and CSS to replicate the user interface of the popular streaming platform. The project aimed to showcase proficiency in frontend web development and design skills."
              ghLink="https://github.com/Ayush1350/Netflix_Clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Amazon}
              title="Amazon Website Clone"
              description="Developed a replica of the Amazon website using only HTML and CSS to demonstrate proficiency in frontend web development and design. The project aimed to replicate the visual style and layout of the Amazon platform, showcasing skills in building complex layouts and styling elements."
              ghLink="https://github.com/Ayush1350/Amazon_Clone"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
