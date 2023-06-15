import style from "../index.module.css";
import { useState } from "react";
import data from "../components/topics/topics.json";
import ButtonOptions from "./generatedQuestion/ButtonOptions";
import generateQuestion from "./generatedQuestion/generateQuestion";
import QuestionList from "./QuestionList";
import "../styles/ExamGenerated.scss"

function Exam() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [howManyQuestion, setHowManyQuestion] = useState("5");


  console.log("howmanyquestion", howManyQuestion);
  const onSubmit = async (e) => {
    e.preventDefault();
    const questionData = await generateQuestion(
      selectedCategory,
      selectedSubcategory,
      selectedTopic,
      setQuestions,
      howManyQuestion
    );
    setCurrentQuestion(currentQuestion + 1);
    setQuestions(questionData);
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
          <label for="question number">How many questions?</label>
          <select onChange={e => setHowManyQuestion(e.target.value)}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
          <input type="submit" value="Start exam" />
        </form>
      </div>
      {questions && 
        <QuestionList  questions={questions}/>
      }
    </main>
  );
}

export default Exam;
