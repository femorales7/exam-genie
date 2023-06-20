import style from "../index.module.css";
import { useState } from "react";
import data from "../components/topics/topics.json";
import ButtonOptions from "./generatedQuestion/ButtonOptions";
import generateQuestion from "./generatedQuestion/generateQuestion";
import QuestionList from "./QuestionList";
import "../styles/ExamGenerated.scss";
import RingLoader from "react-spinners/RingLoader";




function ExamGenerated(props) {
  console.log("exam", props);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [howManyQuestion, setHowManyQuestion] = useState("5");
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
    <main>
      <div className="optionForm">
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
            <div id="numbers_buttonStart">
              <div className="numbers_questions">
                <select onChange={handleHowManyQuestions}>
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                </select>
              </div>
              <div className="Button_start">
                <button
                  class="button-pushable"
                  type="submit"
                  value="Start exam"
                >
                  <span class="button-shadow"></span>
                  <span class="button-edge"></span>
                  <span class="button-front text">Start exam</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {!loading ? (
        <div className="Loadin">
          <RingLoader loading={!loading} size={100} color="orange" />
        </div>
      ) : (
        <div>
          {questions && (
            <QuestionList
              questions={questions}
              finalScore={props.finalScore}
              setFinalScore={props.setFinalScore}
              currentQuestion={props.currentQuestion}
              setCurrentQuestion={props.setCurrentQuestion}
              setUserQuestion={props.setUserQuestion}
            />
          )}
        </div>
      )}
    </main>
  );
}

export default ExamGenerated;
