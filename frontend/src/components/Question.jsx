import { useState } from "react";
import { useNavigate } from "react-router";


const Question = (props) => {
  
  const [score, setScore] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const handleOptionChange = (e) => {
    const userAnswer = e.target.value
    setSelectedOption(userAnswer);
    if(userAnswer === props.answer) {
      alert("correct");
      setScore(score + 1);
    } else {
      alert("do some more work");
    }
  };

  const finishExam = () => {
    navigate("/dashboard")
  };

  return (
    <div className="question-card">
      <h1>Question </h1>
        <h2>{props.question} </h2>
        <div>present score: {score}</div>
        <ul className="answers-list">
          {props.options.map((option, index) => (
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
        {selectedOption && (
        <div>
          <p>Answer: {props.answer}</p>
          <p>{props.feedback}</p>
          <button onClick={finishExam}>Finish Exam</button>
        </div>
        )}
    </div>
    
  )
}
export default Question;