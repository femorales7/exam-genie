import { useState } from "react";
import data from "../topics/topics.json"
import extractQuestionData from "./extractQuestionData";


const generateQuestion = async (selectedCategory, selectedSubcategory, selectedTopic, setQuestion, setOptions, setAnswer, setFeedback, setSelectedOption) => {
  console.log(selectedCategory);
  console.log(selectedSubcategory);
  console.log(selectedTopic);
  const structure = `I need 1 question type test of ${selectedCategory}-${selectedSubcategory}-${selectedTopic} with feedback the reason of that answer, I need before the question put Q: , before the each option put A), B), C), D), E) as appropriate, before the answer put Answer: and before the feedback put feedback, summarize feeback as possible.`;
  // console.log("structure", structure);
  const response = await fetch("http://localhost:8080/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ question: structure }),
  });
  const data = await response.json();
  console.log("data1", data); // Log the response data

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

export default generateQuestion;