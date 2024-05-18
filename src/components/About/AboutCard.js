import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", marginBottom: "1em" }}>
            Having a solid background in computer science, I bring specialized skills in{" "}
            <span className="purple">designing</span> and{" "}
            <span className="purple">enhancing solutions</span> across diverse domains. I
            am driven by a passion for delivering{" "}
            <span className="purple">high-quality, scalable solutions</span> that offer
            both immediate impact and lasting value.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Video editing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Organize recreational workshops
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
