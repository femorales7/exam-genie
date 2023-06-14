import { useState } from "react";

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
    answer = lines[answerIndex].substring(4).trim();
    feedback = lines
      .slice(feedbackIndex)
      .filter((line) => line.trim().length > 0) // Exclude empty lines
      .join("\n");
  }
  console.log("question", options, answer, feedback);
  return { question, options, answer, feedback };
};  

export default extractQuestionData