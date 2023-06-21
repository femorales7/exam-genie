import "../styles/UserQuestions.scss";
import { useNavigate } from "react-router";

const UserQuestions = (props) => {
  const navigate = useNavigate()

  function refreshPage() {
    window.location.reload(false);
  }
  const option1 = props.options;
  // console.log(option1)
  const ArrayOptions = option1.substring(1, option1.length - 1).split(",");
  // console.log(ArrayOptions);
  const lastOption = ArrayOptions[ArrayOptions.length - 1];
  const options = ArrayOptions.filter((item) => item !== lastOption);
  // console.log("options UserQuestion", options);
  console.log(props.exam_id, props.matchId)
  return (
    <>
      {props.exam_id === props.matchId && (
        <div className="user-question-card">
        <button onClick={refreshPage}>Back</button>
        <h1>Question</h1>
        <h2>{props.question} </h2>
        <ul className="user-answers-list">
          {options.map((option, index) => (
            <li key={index}>{option}</li>
          ))}
        </ul>
        <div>
          <p>Answer: {props.answer}</p>
          <p>Feedback: {props.feedback}</p>
        </div>
      </div>)}
    </>
  );
};

export default UserQuestions;
