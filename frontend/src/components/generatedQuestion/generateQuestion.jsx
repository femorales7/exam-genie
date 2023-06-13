import { useState } from "react";
import data from "../topics/topics.json"
import extractQuestionData from "./extractQuestionData";


const generateQuestion = async (selectedCategory, selectedSubcategory, selectedTopic, setQuestion, setOptions, setAnswer, setFeedback, setSelectedOption) => {
  console.log(selectedCategory);
  console.log(selectedSubcategory);
  console.log(selectedTopic);
  const structure = `I need a question of ${selectedCategory}-${selectedSubcategory}-${selectedTopic}. the question has 5 multiple choice. And make it as object inside array. And has answer, feedback for each options`;
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