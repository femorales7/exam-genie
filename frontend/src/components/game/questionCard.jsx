import React from "react";
import "../../styles/Game.scss";
import { FcApproval, FcHighPriority } from "react-icons/fc";

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
  nextQ,
  incorrect,
  correct,
}) => {
  return (
    <div>
      {questions[currentQuestion] && (
        <div className="question-card">
          {correct && (
            <h3 className="correct">
              <FcApproval />
              Correct
            </h3>
          )}
          {incorrect && (
            <h3 className="incorrect">
              <FcHighPriority /> Incorrect
            </h3>
          )}
          <h1>Question {currentQuestion + 1}</h1>
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
              <div className="AnswerFeedback">
                <p>Answer: {questions[currentQuestion].answer}</p>
                <p>{questions[currentQuestion].feedback}</p>
              </div>
              <div className="buttonNextQ">
                <form onSubmit={nextQ}>
                  <button className="button-pushable">
                    <span class="button-shadow"></span>
                    <span class="button-edge"></span>
                    <span class="button-front text">Next Questions</span>
                  </button>
                  {/* <button>Next question</button> */}
                </form>
              </div>
              {/* <button onClick={finishExam}>Finish Exam</button> */}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
