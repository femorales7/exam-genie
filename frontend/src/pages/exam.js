import React from "react";
import Particle from "./Particle";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/style.scss";
import ExamGenerated from "../components/ExamGenerated";

function Exam(props) {

  console.log(props);
  return (
    <section id="background">
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ExamGenerated 
            setFinalScore={props.setFinalScore} 
            finalScore={props.finalScore}
            currentQuestion={props.currentQuestion}
            setCurrentQuestion={props.setCurrentQuestion}
            />
          </Col>
        </Row>
      </Container>
    </Container>
    </section>
  );
}

export default Exam;
