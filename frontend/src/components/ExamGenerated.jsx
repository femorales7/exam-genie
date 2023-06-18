import style from "../index.module.css";
import { useState, useEffect } from "react";
import data from "../components/topics/topics.json";
import ButtonOptions from "./generatedQuestion/ButtonOptions";
import generateQuestion from "./generatedQuestion/generateQuestion";
import QuestionList from "./QuestionList";
import "../styles/ExamGenerated.scss";
import ReactLoading from "react-loading";

function Exam() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [howManyQuestion, setHowManyQuestion] = useState("");
  const [loading, setLoading] = useState(true);

  const handleHowManyQuestions = (event) => {
    const numQuestions = event.target.value;
    setHowManyQuestion(numQuestions);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("howManyQuestion in call funtion", howManyQuestion);
    setLoading(false);
    const questionData = await generateQuestion(
      selectedCategory,
      selectedSubcategory,
      setLoading,
      selectedTopic,
      howManyQuestion
    );
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
          <h2>Topic</h2>
          <div className="options-button">
            <ButtonOptions
              options={Object.keys(data)}
              handleOptionSelection={handleCategorySelection}
            />
          </div>
          <h2>Sub-Topic</h2>
          <div className="options-button">
            {selectedCategory && (
              <ButtonOptions
                options={Object.keys(data[selectedCategory])}
                handleOptionSelection={handleSubcategorySelection}
              />
            )}
          </div>
          <h2>Specialization</h2>
          <div className="options-button">
            {selectedSubcategory && (
              <ButtonOptions
                options={data[selectedCategory][selectedSubcategory]}
                handleOptionSelection={handleTopicSelection}
              />
            )}
          </div>
          <h2 for="question number">How many questions?</h2>
          <select onChange={handleHowManyQuestions}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
          <input
            type="submit"
            value="Start exam"
            className="exam-submit--form"
          />
        </form>
      </div>
      {!loading ? (
        <div className="loading">
          <ReactLoading 
            type={"bars"}
            color={"#03fc4e"}
            height={200}
            width={200}
          />
        </div>
      ) : (
        <div>{questions && <QuestionList questions={questions}  />}</div>
      )}
    </main>
  );
}

export default Exam;
