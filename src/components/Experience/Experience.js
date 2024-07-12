import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";

const experiences = [
  {
    company: "NTT DATA COMPANY",
    role: "DIGITAL ENGINEERING ANALYST",
    duration: "Jul 2021 - Oct 2022",
    description: (
        <p>
          <span style={{ fontWeight: "bold", color: "#c770f0" }}>SKILLS:</span>{" "}
          Python, SQL, Snowflake, Matillion ETL, Informatica Power Center, Alteryx, CDC, Data Pipelines, Extract, Transform, Load
          (ETL), ELT, Stored Procedures, Azure, Fivetran, Databricks, Oracle, Tableau
        </p>
      ),
  },
  {
    company: "NETMAX TECHNOLOGIES",
    role: "PYTHON DEVELOPER INTERN",
    duration: "Jan 2021 - Jun 2021",
    description: (
        <p>
          <span style={{ fontWeight: "bold", color: "#c770f0" }}>SKILLS:</span>{" "}
          Python, SQL, HTML, CSS, Bootstrap, JavaScript, Machine Learning, numpy, Front-end, Back-end 
        </p>
      ),
  },
  {
    company: "SPIC CHANDIGARH",
    role: "PYTHON TRAINEE",
    duration: "Jun 2019 - Jul 2019",
    description: (
        <p>
          <span style={{ fontWeight: "bold", color: "#c770f0" }}>SKILLS:</span>{" "}
          Python, SQL, MySQL, TkInter 
        </p>
      ),
  },
];

function Experience() {
  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container>
        <h1 className="experience-title">
          Work <strong className="purple">Experience</strong>
        </h1>
        <Row className="experience-row">
          {experiences.map((exp, index) => (
            <Col md={6} key={index}>
              <Card className="experience-card-view">
                <Card.Body>
                  <Card.Title className="experience-role">{exp.role}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted experience-company">{exp.company}</Card.Subtitle>
                  <Card.Text className="experience-duration">{exp.duration}</Card.Text>
                  <Card.Text className="experience-description">{exp.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
