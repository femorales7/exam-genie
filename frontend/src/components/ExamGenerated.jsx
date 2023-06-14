import style from "../index.module.css";
import { useState } from "react";
import data from "../components/topics/topics.json";
import ButtonOptions from "./generatedQuestion/ButtonOptions";
import generateQuestion from "./generatedQuestion/generateQuestion";
import "../styles/ExamGenerated.scss"
import { Navigate, useNavigate } from "react-router-dom";

function Exam() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const navigate = useNavigate();

  console.log(selectedCategory); // Log the selected category
  console.log(selectedSubcategory); // Log the selected subcategory
  console.log(selectedTopic);

  const onSubmit = async (e) => {
    e.preventDefault();
    const questionData = await generateQuestion(
      selectedCategory,
      selectedSubcategory,
      selectedTopic,
      setQuestion,
      setOptions,
      setAnswer,
      setFeedback,
      setSelectedOption
    );
    setCurrentQuestion(currentQuestion + 1);
    console.log("return from server", questionData);
  };

  const handleOptionChange = (e) => {
    const userAnswer = e.target.value
    setSelectedOption(userAnswer);
    console.log(userAnswer);
    console.log(answer);
    if(userAnswer === answer) {
      alert("correct");
      setScore(score + 1);
    } else {
      alert("do some more work");
    }
  };

  // const saveUserAnswer = (e) => {
  //   e.preventDefault();

  //   fetch('http://localhost:3000/exam', {
  //     method: 'POST',
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(e.target.value)
  //   }).then(() => {
  //     console.log('add user answer');
  //   })
  // }
  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
    setSelectedSubcategory(null);
    setSelectedTopic(null);
  };

  const handleSubcategorySelection = (subcategory) => {
    setSelectedSubcategory(subcategory);
    setSelectedTopic(null);
  };

  const handleTopicSelection = (topic) => {
    setSelectedTopic(topic);
  };

  const finishExam = () => {
    navigate("/dashboard")
  }

  return (
    <main className={style.main}>
      <div className="options">
        <form onSubmit={onSubmit}>
          <label>Topic</label>
          <ButtonOptions
            options={Object.keys(data)}
            handleOptionSelection={handleCategorySelection}
          />
          <h2>Sub-Topic</h2>
          {selectedCategory && (
            <ButtonOptions
              options={Object.keys(data[selectedCategory])}
              handleOptionSelection={handleSubcategorySelection}
            />
          )}
          Detail
          {selectedSubcategory && (
            <ButtonOptions
              options={data[selectedCategory][selectedSubcategory]}
              handleOptionSelection={handleTopicSelection}
            />
          )}
          <input type="submit" value="Start exam" />
        </form>
      </div>
      {question && (
        <div className="question-card">
          <h1>Question {currentQuestion}</h1>
          <h2>{question} </h2>
          <div>present score: {score} / {currentQuestion}</div>
          <ul className="answers-list">
            {options.map((option, index) => (
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
              <p>answer: {answer}</p>
              <p>{feedback}</p>
              <form onSubmit={onSubmit}>
                <button>Next question</button>
              </form>
              <button onClick={finishExam}>Finish Exam</button>
            </div>
          )}
        </div>
      )}
    </main>
  );
}

export default Exam;
