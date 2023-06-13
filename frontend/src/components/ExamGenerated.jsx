import style from "../index.module.css";
import { useState } from "react";
import data from "../components/topics/topics.json";
import BotonOpciones from "./generatedQuestion/botonOpciones";
import generateQuestion from "./generatedQuestion/generateQuestion";
import "../styles/ExamGenerated.scss"

function Exam() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

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
    console.log("return from server", questionData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const makeQuestion = { question, options, answer, feedback }
    fetch('http://localhost:3000/exam', {
      method: 'POST',
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(makeQuestion)
    }).then(() => {
      console.log('new question added')
    })
  };
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

  return (
    <main className={style.main}>
      <div className="options">
        <form onSubmit={onSubmit}>
          Topic
          <BotonOpciones
            opciones={Object.keys(data)}
            handleOptionSelection={handleCategorySelection}
          />
          Sub-Topic
          {selectedCategory && (
            <BotonOpciones
              opciones={Object.keys(data[selectedCategory])}
              handleOptionSelection={handleSubcategorySelection}
            />
          )}
          Detail
          {selectedSubcategory && (
            <BotonOpciones
              opciones={data[selectedCategory][selectedSubcategory]}
              handleOptionSelection={handleTopicSelection}
            />
          )}
          <input type="submit" value="Next question" />
        </form>
      </div>
        {question && (
        <div className="question-card">
          <div>
            <h3>Questions</h3>
            <form onSubmit={handleSubmit}>
              <h2>{question}</h2>
              <ul className="answers-list">
                {options.map((option, index) => (
                  <li key={index}>
                      <input
                        type="radio"
                        name="options"
                        value={option}
                        />
                      <label>{option}</label>
                  </li>
                ))}
              </ul>
              <button>Submit</button>
            </form>
            {selectedOption && (
              <div>
                <p>Answer: {answer}</p>
                <p>Feedback: {feedback}</p>
              </div>
            )}
          </div>
        </div>
        )}
    </main>
  );
}

export default Exam;
