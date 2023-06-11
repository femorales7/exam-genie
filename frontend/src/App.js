import logo from "./logo.svg";
import style from "./index.module.css";
import { useState } from "react";
import TopNavigation from "./components/TopNavigationBar";

function App() {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const questionData = await generateQuestion(question);
    console.log("return from server", questionData);
  };

  const generateQuestion = async (inputQuestion) => {
    const response = await fetch("http://localhost:8080/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question: inputQuestion }),
    });
    const data = await response.json();
    console.log("data", data); // Log the response data

    const { response: questionData } = data;
    const { question, options, answer, feedback } =
      extractQuestionData(questionData);

    setQuestion(question);
    setOptions(options);
    setAnswer(answer);
    setFeedback(feedback);
    setSelectedOption(null);

    return { question, options, answer, feedback };
  };

  const extractQuestionData = (text) => {
    const lines = text.split("\n");
    console.log("lines", lines);
    let question = "";
    let options = [];
    let answer = "";
    let feedback = "";

    const questionIndex = lines.findIndex((line) => line.startsWith("Q:"));
    console.log("questionIndex", questionIndex);
    if (questionIndex !== -1) {
      question = lines[questionIndex].substring(3).trim();
    }

    const optionsStartIndex = lines.findIndex((line) =>
      line.trim().startsWith("A)")
    );
    console.log("optionsStartIndex", optionsStartIndex);
    const answerIndex = lines.findIndex((line) =>
      line.trim().startsWith("Answer:")
    );
    console.log("answerIndex", answerIndex);
    const feedbackIndex = lines.findIndex((line) =>
      line.trim().startsWith("Feedback:")
    );
    console.log("feedbackIndex", feedbackIndex);

    if (
      optionsStartIndex !== -1 &&
      answerIndex !== -1 &&
      feedbackIndex !== -1
    ) {
      options = lines
      .slice(optionsStartIndex, answerIndex)
      .map((line) => line.trim()) 
      .filter((option) => option.length > 0); // Exclude empty options
    answer = lines[answerIndex].substring(8).trim();
    feedback = lines
      .slice(feedbackIndex)
      .filter((line) => line.trim().length > 0) // Exclude empty lines
      .join("\n");
    }

    return { question, options, answer, feedback };
  };
  
  
  
  
  

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <>
      <div>
        <TopNavigation/>
      </div>
      <main className={style.main}>
        <h3>EXAM-GENIE</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="query-description"
            placeholder="question"
            onChange={(e) => setQuestion(e.target.value)}
          />
          <input type="submit" value="generate question" />
        </form>
  
        {question && (
          <div>
            <h2>{question}</h2>
            <ul>
              {options.map((option) => (
                <li key={option.letter} className={style["radio-option"]}>
                  <label>
                    <input
                      type="radio"
                      name="options"
                      value={option.letter}
                      checked={selectedOption === option.letter}
                      onChange={handleOptionChange}
                    />
                    {option.letter}) {option.text}
                  </label>
                </li>
              ))}
            </ul>
            {selectedOption && (
              <div>
                <p>Answer: {answer}</p>
                <p>Feedback: {feedback}</p>
              </div>
            )}
          </div>
        )}
      </main>  
    </>
  );
}

export default App;
