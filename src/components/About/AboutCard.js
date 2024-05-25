import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Hello! I'm <span className="text-warning">Ayush Patel,</span>
          <br />
            
            <br />
            A passionate and dedicated Computer Engineer with a <span className="text-warning">Bachelor's degree in Computer Engineering.</span>
            <br />

            <br />
            I specialize in web development, and I have extensive experience working with technologies such as <span className="text-warning">HTML, CSS, JavaScript, React, Express.js, and Node.js.</span> Additionally, I have hands-on experience in <span className="text-warning">Android development.</span>
            <br />
            <br />

            Throughout my career, I have worked on numerous projects that have honed my skills in both frontend and backend development.
            
          </p>

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
