import Question from "./Question";


const QuestionList = (props) => {
  
  const questions = props.questions;
  const mappedQuestion = questions.map((question, index) => {
    return <Question
      key={index}
      question={question.question}
      options={question.options}
      answer={question.answer}
      feedback={question.feedback}
    />
  })

  return (
    <div className="question-list">
      {mappedQuestion}
    </div>
  )
}

export default QuestionList;