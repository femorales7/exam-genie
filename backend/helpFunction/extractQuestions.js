const { addQuestions } = require("../db/queries/addQuestions");

const extractQuestionData = (text) => {

  // console.log("text", text)

const questionBlocks = text.split("===");

const questionObjects = questionBlocks.map((block) => {
  const questionMatch = block.match(/Q:(.*)/);
  const optionsMatch = block.match(/([A-E]\))(.*)/g);
  const answerMatch = block.match(/Answer:(.*)/);
  const feedbackMatch = block.match(/Feedback:(.*)/);

  const question = questionMatch ? questionMatch[1].trim() : "";
  const options = optionsMatch ? optionsMatch.map((option) => option.trim()) : [];
  const answer = answerMatch ? answerMatch[1].trim() : "";
  const feedback = feedbackMatch ? feedbackMatch[1].trim() : "";

  const questionObject = { question, answer, feedback, options };

  addQuestions(questionObject)
  .then(() => {

    console.log('question saved in DB')
  })
  .catch((error) => {
    console.error('error saving questions in DB', error)
  })

  return questionObject;
});
console.log("questionObjects", questionObjects);


};

module.exports =  extractQuestionData;
