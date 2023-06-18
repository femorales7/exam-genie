import React, { useState } from "react";
import data from "../topics/topics.json";
import extractQuestionData from "./extractQuestionData";

const generateQuestion = async (
  selectedCategory,
  selectedSubcategory,
  setLoading,
  selectedTopic,
  howManyQuestion
) => {
  console.log("howmanyquestion", howManyQuestion);
  const structure = `I need ${howManyQuestion} questions type test of ${selectedCategory}-${selectedSubcategory}-${selectedTopic} with feedback the reason of that answer, I need before the question put Q: , before the each option put A), B), C), D), E) as appropriate, before the answer put Answer: and before the feedback put feedback, summarize feeback as possible. seperate each question by three equal to characters (===)`;
  console.log(structure);
  const response = await fetch("http://localhost:8080/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ question: structure }),
  });
  const data = await response.json();

  const { response: questionData } = data;
  console.log(questionData);
  const questions = questionData.split("===").map(extractQuestionData);
  setLoading(true);

  return questions;
};

export default generateQuestion;
