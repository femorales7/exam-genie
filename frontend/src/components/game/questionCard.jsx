import React from "react";
import "../../styles/Game.scss"

const QuestionCard = ({
  questions,
  currentQuestion,
  currentPlayerIndex,
  players,
  selectedOption,
  answer,
  feedback,
  handleOptionChange,
  onSubmit,
  finishExam,
  nextQ 
}) => {
  return (
    <div>
    {questions[currentQuestion] && (
    <div className="question-card">
      <h1>Question {currentQuestion}</h1>
      {questions[currentQuestion] && (
        <h2>{questions[currentQuestion].question}</h2>
      )}
      <div>
        {players[currentPlayerIndex] && (
          <>
            <h3>Current player: {players[currentPlayerIndex].name}</h3>
            <div>Present score: {players[currentPlayerIndex].score}</div>
          </>
        )}
      </div>
      {questions[currentQuestion] && (
        <ul className="answers-list">
          {questions[currentQuestion].options.map((option, index) => (
            <li key={index}>
              <label>
                <input
                  type="radio"
                  name="options"
                  value={option}
                  checked={selectedOption === option}
                  onChange={handleOptionChange}
                />
                {option}
              </label>
            </li>
          ))}
        </ul>
      )}
      {selectedOption && (
        <div>
          <p>Answer: {questions[currentQuestion].answer}</p>
          <p>{questions[currentQuestion].feedback}</p>
          <form onSubmit={nextQ }>
            <button>Next question</button>
          </form>
          <button onClick={finishExam}>Finish Exam</button>
        </div>
      )}
    </div>
    )}
    </div>
  );
};

export default QuestionCard;
