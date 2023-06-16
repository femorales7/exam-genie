import { useState } from "react";
import Question from "./Question";
import {
  createRoutesFromElements,
  useNavigate,
  createBrowserRouter,
  Link,
} from "react-router-dom";
import { Route } from "react-router";
import "../styles/QuestionList.scss";
import Dashboard from "../pages/dashboard";

const QuestionList = (props) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [incorrect, setIncorrect] = useState(false);
  const navigate = useNavigate();

  const questions = props.questions;
  //validation of answer and change set of message Correct or incorrect
  const handleOptionChange = (e) => {
    const userAnswer = e.target.value;
    setSelectedOption(userAnswer);
    console.log("user answer", userAnswer);
    if (userAnswer === questions[currentQuestion].answer) {
      setCorrect(true);
      setScore(score + 1);
    } else {
      setIncorrect(true);
    }
  };

  // Move to the next question
  const handleNextQuestion = () => {
    setSelectedOption(null);
    setCorrect(false);
    setIncorrect(false);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };
// finish exam an redirect to Daschboard
  const finishExam = () => {
    navigate("/dashboard", {
      state: { score: score, currentQuestion: currentQuestion },
    });
  };

  const mappedQuestion = questions.map((question, index) => {
    return (
      <Question
        key={index}
        id={index}
        question={question.question}
        options={question.options}
        answer={question.answer}
        feedback={question.feedback}
        currentQuestion={currentQuestion}
        selectedOption={selectedOption}
        handleOptionChange={handleOptionChange}
        handleNextQuestion={handleNextQuestion}
        correct={correct}
        incorrect={incorrect}
      />
    );
  });

  return (
    <>
      {showResults ? (
        <div className="final-results">
          <h1>Fianl Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={finishExam}>Finish Exam</button>
        </div>
      ) : (
        <div className="question-list">{mappedQuestion}</div>
      )}
    </>
  );
};

export default QuestionList;
