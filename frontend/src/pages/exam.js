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
      <Container>
          <div>
            <ExamGenerated 
            setFinalScore={props.setFinalScore} 
            finalScore={props.finalScore}
            currentQuestion={props.currentQuestion}
            setCurrentQuestion={props.setCurrentQuestion}
            // setUserQuestion={props.setUserQuestion}
            />
            </div>
      </Container>
    </Container>
    </section>
  );
}

export default Exam;
