import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Amazon from "../../Assets/Projects/Amazon.png";
import BubblePopGame from "../../Assets/Projects/BubblePopGame.png";
import ECommerce from "../../Assets/Projects/E-Commerce.png";
import MedicineDonation from "../../Assets/Projects/MedicineDonation.png";
import Netflix from "../../Assets/Projects/Netflix.png";
import TravelWebsite from "../../Assets/Projects/TravelWebsite.png";

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
              ghLink="https://github.com/Ayush1350/Go-To-Shopping"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BubblePopGame}
             
              title="Bubble Pop"
              description="Bubble Pop is a captivating web-based game developed entirely in JavaScript, offering players an engaging challenge of popping bubbles containing characters to clear the screen. With its unique gameplay mechanics and colorful design, Bubble Pop promises hours of addictive fun for players of all ages."
              ghLink="https://github.com/Ayush1350/Bubble_POP_Game"
                           
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

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MedicineDonation}
              
              
              title="Medicine Donation"
              description="The Online Medicine Donation System is a Kotlin-based application with a frontend built using XML. It facilitates the donation of unused medicines to NGOs for further distribution to those in need. The system comprises three user roles: Admin, NGO, and User."
              ghLink="https://github.com/Ayush1350/Medicine_Donation"
              
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
