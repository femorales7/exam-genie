
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Container } from "react-bootstrap";
import { Pie } from "react-chartjs-2";
import UserQuestions from "../components/UserQuestions";
import "../styles/dashboard.scss"
import { useEffect, useState } from "react";



function Dashboard(props) {
  const [ListShow, setListShow] = useState(true);
  const [questionShow, setQuestionShow] = useState(false);
  const [exams, setExams] = useState([]);
  const [matchId, setMatchId] = useState([]);
  ChartJS.register(ArcElement, Tooltip, Legend);

  useEffect(() => {
    fetch('http://localhost:8080/dashboard')
    .then(res => res.json())
    .then((data => { props.setUserQuestion(data)}))
  }, [ListShow])

  useEffect(() => {
    fetch('http://localhost:8080/exam')
    .then(res => res.json())
    .then((data => setExams(data)))
  }, [ListShow])


  const data = {
    labels : ["correct", "incorrect"],
    datasets : [
      {
        label: "results", 
        data: [props.finalScore, (props.currentQuestion + 1) - props.finalScore],
        // data: [3, 5],
        backgroundColor: ["#85C1E9", "#EC7063"],
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
console.log("exams", exams)
  const questionList = exams.map((exam, index) => {
    
    return(
      <ul>
        <li key={index} onClick={() => {
          setQuestionShow(true) 
          setListShow(false)
          setMatchId(exam.id)
          }}>
          {exam.name}
        </li>
      </ul>
    )
  })
  console.log("props.userQuestions", props.userQuestions)
  const mappedUserQuetions = props.userQuestions.map((question, index) => {
    return (
      <UserQuestions
        key={index}
        id={index}
        exam_id={question.exam_id}
        matchId={matchId}
        question={question.question}
        answer={question.answer}
        feedback={question.feedback}
        options={question.question_option}
      />
    )
  })

  console.log("mappedUserQuetions", mappedUserQuetions);
  console.log("questionShow", questionShow)
  console.log("questionList", questionList)

  return(
    <Container fluid className="project-section">
      <div>
        <h1> previous exam</h1>
        {ListShow && (<div>
          {questionList}
        </div>)}
        {questionShow && (<div>
          {mappedUserQuetions}
        </div> )}
      </div>
    </Container>
  )
}

export default Dashboard;