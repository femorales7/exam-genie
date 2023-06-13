import style from "../index.module.css";
import { useState } from "react";
import data from "../topics/topics.json";



const BotonOpciones = ({ opciones, handleOptionSelection }) => {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);
  const [mostrarOpciones, setMostrarOpciones] = useState(false);

  const handleOpcionSeleccionada = (opcion) => {
    setOpcionSeleccionada(opcion);
    handleOptionSelection(opcion);
    setMostrarOpciones(false);
  };

  return (
    <div>
      <button onClick={() => setMostrarOpciones(!mostrarOpciones)}>
        {opcionSeleccionada ? opcionSeleccionada : "Seleccionar opción"}
      </button>
      {mostrarOpciones && (
        <ul>
          {opciones.map((opcion) => (
            <li key={opcion} onClick={() => handleOpcionSeleccionada(opcion)}>
              {opcion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

function Exam() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  console.log(selectedCategory);      // Log the selected category
console.log(selectedSubcategory);   // Log the selected subcategory
console.log(selectedTopic); 

  const onSubmit = async (e) => {
    e.preventDefault();
    const questionData = await generateQuestion();
    console.log("return from server", questionData);
  };

  const generateQuestion = async (inputQuestion) => {
    const structure = `I need 1 question type test of ${selectedCategory}-${selectedSubcategory}-${selectedTopic} with feedback. The reason for that answerI need before the question put Q: , before the each option put A), B), C), D), E) as appropriate, before the answer put Answer: and before the feedback put feedback:`;
    console.log("structure", structure)
    const response = await fetch("http://localhost:8080/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question: structure }),
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
    console.log("question", options, answer, feedback);
    return { question, options, answer, feedback };
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
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
      <form onSubmit={onSubmit}>
        Topic
      <BotonOpciones
        opciones={Object.keys(data)}
        handleOptionSelection={handleCategorySelection}
      />Sub-Topic
      {selectedCategory && (
        <BotonOpciones
          opciones={Object.keys(data[selectedCategory])}
          handleOptionSelection={handleSubcategorySelection}
        />
      )}Detail
      {selectedSubcategory && (
        <BotonOpciones
          opciones={data[selectedCategory][selectedSubcategory]}
          handleOptionSelection={handleTopicSelection}
        />
      )}
      <input type="submit" value="generate question" />
      </form>

      {question && (
        <div>
          <h2>{question}</h2>
          <ul>
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
              <p>Answer: {answer}</p>
              <p>Feedback: {feedback}</p>
            </div>
          )}
        </div>
      )}
    </main>
  );
}

export default Exam;
