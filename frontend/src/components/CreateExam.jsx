import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/CreateExam.scss"

const CreateExam = () => {
  const navigate = useNavigate();
  const [createExam, setCreateExam] = useState("");

  const examOnSubmit = (e) => {
    e.preventDefault();

    const exam = { createExam }
    fetch('http://localhost:8080/exam', {
      method: 'POST',
      headers: { "Content-Type" : "application/json"},
      body: JSON.stringify(exam)
    }).then(() => {
      console.log("exam created")
    })
  }

  const onClickHandler = () => {
    navigate("/exam")
  }

  return (
    <Container fluid className="project-section">
      <div className="exam-container">
        <div className="exam-container-box">
          <div className="center">
            <form onSubmit={examOnSubmit}>
              <h2>Create your own exam</h2>
              <input 
              type="text"
              placeholder="Create your exam"
              value={createExam}
              required
              onChange={(e) => {
                setCreateExam(e.target.value)
              }}
              />
              <button type="submit" onClick={onClickHandler}>Create</button>
            </form>
          </div>
      </div>
    </div>
  </Container>
  )
}

export default CreateExam;