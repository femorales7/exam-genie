import { useState } from "react";
import Question from "./Question";
import "../styles/QuestionList.scss"


const QuestionList = (props) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResults, setShowResults] = useState(false)
  

  const questions = props.questions;

  const handleOptionChange = (e) => {
    const userAnswer = e.target.value
    setSelectedOption(userAnswer);
    console.log("user answer", userAnswer)
    if (userAnswer === questions[currentQuestion].answer) {
      alert("correct");
      setScore(score + 1);
    } else {
      alert("do some more work");
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption(null)
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  }

  const mappedQuestion = questions.map((question, index) => {
    return <Question
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
    />
  })

  return (
    <>  
      {showResults ? (
       <div className="final-results">
        <h1>Fianl Results</h1>
        <h2>
          {score} out of {questions.length} correct - ({(score/questions.length)* 100}%)
        </h2>
        </div>
      ) : (
      <div className="question-list"> 
        {mappedQuestion}
      </div>
      )}
    </>
  )
}

export default QuestionList;