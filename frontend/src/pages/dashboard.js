
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Container } from "react-bootstrap";
import { Pie } from "react-chartjs-2";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import UserQuestions from "../components/UserQuestions";



function Dashboard(props) {  
  ChartJS.register(ArcElement, Tooltip, Legend);
  const [show, setShow] = useState()

  

  const data = {
    labels : ["correct", "wrong"],
    datasets : [
      {
        label: "results", 
        data: [props.finalScore, (props.currentQuestion + 1) - props.finalScore],
        // data: [3, 5],
        backgroundColor: ["blue", "red"],
        borderColor: "black"
      }
    ]
  };
  const options = {
    responsive : true,
    title : {
      display : true,
      text : "Pia chart"
    },
  }

  const mappedUserQuetions = props.userQuestions.map((question, index) => {
    return (
      <UserQuestions
        key={index}
        question={question.question}
        answer={question.answer}
        feedback={question.feedback}
      />
    )
  })

  return(
    props.currentQuestion !== 0 ? (
    <Container fluid className="project-section">
        <div className="final-results">
          <div style={ {width: "50%"}}>
            <Pie
              data = {data}
              options={options}
            />
          </div>
          <h1>Fianl Results</h1>
          <h2>
            {props.finalScore} out of {props.currentQuestion + 1} correct - (
            {(props.finalScore / (props.currentQuestion + 1)) * 100}%)
          </h2>
        </div>
        <h1>{props.userQuestions[0].name}'s previous exam</h1>
        <div>
            {mappedUserQuetions}
        </div>
    </Container>
    ) : (
        <Container fluid className="project-section">
          <h1>There is no result yet</h1>
        </Container>
    )
  )
}

export default Dashboard;