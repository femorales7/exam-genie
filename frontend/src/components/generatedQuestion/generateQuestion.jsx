import { useState } from "react";
import data from "../topics/topics.json"
import extractQuestionData from "./extractQuestionData";


const generateQuestion = async (selectedCategory, selectedSubcategory, selectedTopic, setQuestion, setOptions, setAnswer, setFeedback, setSelectedOption, setQuestions) => {
  // console.log(selectedCategory);
  // console.log(selectedSubcategory);
  // console.log(selectedTopic);
  const structure = `I need 2 questions type test of ${selectedCategory}-${selectedSubcategory}-${selectedTopic} with feedback the reason of that answer, I need before the question put Q: , before the each option put A), B), C), D), E) as appropriate, before the answer put Answer: and before the feedback put feedback, summarize feeback as possible. seperate each question by three equal to characters (===)`;
  // console.log("structure", structure);
  const response = await fetch("http://localhost:8080/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ question: structure }),
  });
  const data = await response.json();
  // console.log("data1", data); // Log the response data

  const { response: questionData } = data;
  const questions = questionData.split("===").map(extractQuestionData)

  // setQuestions(questions);
  // console.log("quesitons hello", questions)
  // const { question, options, answer, feedback } =
  //   extractQuestionData(questionData);

  // setQuestion(question);
  // setOptions(options);
  // setAnswer(answer);
  // setFeedback(feedback);
  setSelectedOption(null);

  return questions;
};

export default generateQuestion;