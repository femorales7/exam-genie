import OptionsForm from "./game/optionsForm";

const UserQuestions = (props) => {
  const option1 = props.options;

  const ArrayOptions = option1.substring(1, option1.length - 1).split(",");

  const lastOption = ArrayOptions[ArrayOptions.length - 1];
  const options = ArrayOptions.filter((item) => item !== lastOption);
  console.log("options UserQuestion", options);

  return (
    <div>
      <h1>Question</h1>
      <h2>{props.question} </h2>
      <ul className="answers-list">
        {options.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ul>
      <div>
        <p>Answer: {props.answer}</p>
        <p>Feedback: {props.feedback}</p>
      </div>
    </div>
  );
};

export default UserQuestions;
