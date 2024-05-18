import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import autoGaurd from "../../Assets/Projects/autoGaurd.jpg";
import mongoRedis from "../../Assets/Projects/mongoRedis.jpg";
import homeAutomation from "../../Assets/Projects/homeAutomation.jpg";
import stockMarketArchitecture from "../../Assets/Projects/stockMarketArchitecture.jpg";
import tourEasy from "../../Assets/Projects/tourEasy.jpg";
import spotifyPipeline from "../../Assets/Projects/spotifyPipeline.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
  {/*       <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>*/}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stockMarketArchitecture}
              isBlog={false}
              title="Stock Market Real-Time Data Pipeline"
              description="Implemented a streaming data pipeline using Apache Kafka to ingest, process, and visualize real-time stock market data from a Kaggle dataset, leveraging Python, SQL, and AWS services for data transformations and analytics."
              ghLink="https://github.com/tmukker/stock-market-data-pipeline"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tourEasy}
              isBlog={false}
              title="TourEasy"
              description="TourEasy, a robust tour management platform, utilizing Papyrus (code generation), Java, OCL constraints, and UML diagrams, and implemented user-friendly features like personalized profiles and efficient guide matching for an exceptional tour booking experience."
              ghLink="https://github.com/tmukker/TourEasy---COEN6312"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spotifyPipeline}
              isBlog={false}
              title="Spotify Data Pipeline"
              description="Automated detailed track extraction and transformation using AWS Lambda, Spotipy, and pandas, and orchestrated a scalable end-to-end ETL pipeline on AWS, integrating Lambda, CloudWatch, Glue, and Athena for efficient data processing and querying."
              ghLink="https://github.com/tmukker/spotify-data-pipeline"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={autoGaurd}
              isBlog={false}
              title="AutoGaurd"
              description="Built a serverless AWS Lambda-based solution utilizing Rekognition for vehicle registration and authentication, integrated with DynamoDB for user data storage, and constructed a RESTful architecture with CI/CD using AWS CodeBuild and SwaggerHub for efficient API documentation."
              ghLink="https://github.com/tmukker/ag-registration"
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mongoRedis}
              isBlog={false}
              title="Mongo-DB Redis Cloud Aggregation Pipeline"
              description="Implemented a data retrieval and analysis solution leveraging MongoDB’s document-oriented structure and Redis Cloud’s in-memory caching to streamline querying processes and enhance performance, achieving 97.4% faster response times by utilizing pre-loaded Redis cache compared to querying MongoDB directly."
              ghLink="https://github.com/tmukker/mongoDB-Redis"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={homeAutomation}
              isBlog={false}
              title="Home Automation System"
              description="Developed a home automation system utilizing Python for programming the Raspberry Pi, integrating sensors via serial communication, and establishing MQTT connections. This system enables automated control of various household functions, ensuring efficient management and enhancing convenience for users."
              ghLink="https://github.com/tmukker/Home-Automation-System"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
