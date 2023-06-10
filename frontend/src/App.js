import logo from "./logo.svg";
import style from "./index.module.css";
import { useState } from "react";

function App() {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  const generateQuestion = async (questionValue) => {
    const response = await fetch("http://localhost:8080/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question: questionValue }),
    });
    const data = await response.json();
    console.log(data.response); // Add this line
    const questionData = data.response;
    const { question, options, answer, feedback } =
      extractQuestionData(questionData);
    setQuestion(question);
    setOptions(options);
    setAnswer(answer);
    setFeedback(feedback);
    setSelectedOption(null); // Reset selected option

    return { question, options, answer, feedback }; // Return the question data
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const questionData = await generateQuestion(question);
    console.log("return from server", questionData);
  };

  const extractQuestionData = (text) => {
    const lines = text.split("\n");
  
    let question = "";
    let options = [];
    let answer = "";
    let feedback = "";
  
    const questionIndex = lines.findIndex((line) => line.startsWith("Q:"));
    if (questionIndex !== -1) {
      question = lines[questionIndex].substring(3).trim();
    }
  
    const optionsStartIndex = lines.findIndex((line) => line.startsWith("A)"));
    const answerIndex = lines.findIndex((line) => line.startsWith("Answer:"));
    const feedbackIndex = lines.findIndex((line) => line.startsWith("Feedback:"));
  
    if (optionsStartIndex !== -1 && answerIndex !== -1 && feedbackIndex !== -1) {
      options = lines.slice(optionsStartIndex, answerIndex).map((line) => {
        const optionLetter = line.charAt(0);
        const optionText = line.substring(3).trim();
        return {
          letter: optionLetter,
          text: optionText,
        };
      });
      answer = lines[answerIndex].substring(8).trim();
      feedback = lines.slice(feedbackIndex + 1).join("\n").trim();
    }
  
    return { question, options, answer, feedback };
  };
  
  
  
  

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
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
  );
}

export default App;
