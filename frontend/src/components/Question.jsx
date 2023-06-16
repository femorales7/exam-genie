
const Question = (props) => {
  return (
    props.id === props.currentQuestion && (<div className="question-card">
      <h1>Question {props.currentQuestion + 1}</h1>
        <h2>{props.question} </h2>
        <ul className="answers-list">
          {props.options.map((option, index) => (
            <li key={index}>
              <label>
                <input
                  type="radio"
                  name="options"
                  value={option}
                  checked={props.selectedOption === option}
                  onChange={props.handleOptionChange}
                />
                {option}
              </label>
            </li>
          ))}
        </ul>
        {props.selectedOption && (
        <div>
          <p>Answer: {props.answer}</p>
          <p>{props.feedback}</p>
          <button onClick={props.handleNextQuestion}>Next Questions</button>

        </div>
        
        )}
    </div>
    )
  )
}
export default Question;