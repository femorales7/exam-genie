
const UserQuestions = (props) => {
  console.log("question user", props.options)
  const options = props.options;
  // const mappedOptions = Object.keys(options).map((key, index) => {
  //   return (
  //     <li>
  //       <label>
  //         <input
  //           type="radio"
  //           name="options"
  //           value={options[key]}
  //         />
  //         {key} : {options[key]}
  //       </label>
  //     </li>
  //   )
  // })

  // console.log("mappedOptions", mappedOptions);
  return (
    <div>
      <h1>Question</h1>
        <h2>{props.question} </h2>
        <ul className="answers-list">
        </ul>
          <div>
            <p>Answer: {props.answer}</p>
            <p>{props.feedback}</p>
          </div>
    </div>
  )
}

export default UserQuestions;