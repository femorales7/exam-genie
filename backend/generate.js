const openaiClient = require("./server");
const generate = async (question, openaiClient) => {
  const davinci = async (question) => {
    const response = await openaiClient.createCompletion({
      model: "text-davinci-003",
      prompt: `${question}.`,
      max_tokens: 700,
      temperature: 1.6,
    });

    return response.data;

  };

  const chatGptApi = async (question) => {
    const messages = [
      { role: "system", content: "you are a provider of question with multiple choice" },
      { role: "user", content: "I need 1 question type test of ${selectedCategory}-${selectedSubcategory}-${selectedTopic} with feedback. The reason for that answerI need before the question put Q: , before the each option put A), B), C), D), E) as appropriate, before the answer put Answer: and before the feedback put feedback:" },
      { role: "assistant", content: `Q: Epistemology draws assessments for items that have tangible costs when open accordingly with reasonability that excludes chutzpah.
      A) True
      B) FALSE
      C) It depends
      D) judgment call
      E) Factual enforcement mechnistic

      Answer: B) FALSE

      Feedback: Epistemology assess open items with expectation to propose possible poses hypothes says but offer details adequate ongoing understanding reliance or holds of pers will without incl of chutzpah aka tact.
    ` },
      { role: "user", content: `${question}.` },
    ];
    const response = await openaiClient.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: messages,
    });
    
    return response.data.choices[0].message.content;
  };

  return await chatGptApi(question);
};

module.exports = generate;
