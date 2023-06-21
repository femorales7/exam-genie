import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/CreateExam.scss";

const CreateExam = () => {
  const navigate = useNavigate();
  const [createExam, setCreateExam] = useState("");

  const examOnSubmit = (e) => {
    e.preventDefault();

    const exam = { createExam };
    fetch("http://localhost:8080/exam", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(exam),
    }).then(() => {
      console.log("exam created");
    });
  };

  const onClickHandler = () => {
    navigate("/exam");
  };

  return (
    <Container fluid className="project-section">
      <div className="exam-container">
        <div className="">
          <div className="center">
            <form onSubmit={examOnSubmit}>
              <h2>Create your own exam</h2>
              <div className="CreatExam">
                <input
                  // className="CreatExam"
                  type="text"
                  placeholder="Exam Name"
                  value={createExam}
                  required
                  onChange={(e) => {
                    setCreateExam(e.target.value);
                  }}
                />
                {/* <label>Name of Exam</label> */}
              </div>
              <button
                className="button-pushable"
                type="submit"
                value="Add user"
                onClick={onClickHandler}
              >
                <span class="button-shadow"></span>
                <span class="button-edge"></span>
                <span class="button-front text">Create</span>
              </button>
              {/* <button type="submit" onClick={onClickHandler}>Create</button> */}
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CreateExam;
