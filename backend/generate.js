const openaiClient = require("./server");

const generate = async (question, openaiClient) => {
  const davinci = async (question) => {
    const response = await openaiClient.createCompletion({
      model: "text-davinci-003",
      prompt: `${question}.`,
      max_tokens: 200,
      temperature: 1.6,
    });
   
    return response.data;

  };

  const chatGptApi = async (question) => {
    const messages = [
      { role: "system", content: "you are a provider of question with multiple choise, open answer or mix." },
      { role: "user", content: "I need 1 questions type test of Philosophy-Epistemology-Rationalism with feedback the reason of that answer, I need before the question put Q: , before the each option put A), B), C), D), E) as appropriate, before the answer put Answer: and before the feedback put feedback:." },
      { role: "assistant", content: `Q: Epistemology draws assessments for items that have tangible costs when open accordingly with reasonability that excludes chutzpah.
        A)True
        B)FALSE
        C)It depends
        D)judgment call
        E)Factual enforcement mechnistic
      
        Answer: B) FALSE
      
        Feedback: Epistemology assess open items with expectation to propose possible poses hypothes says but offer details adequate ongoing understanding reliance or holds of pers will without incl of chutzpah aka tact.` },
      { role: "user", content: `${question}.` },
    ];
    const response = await openaiClient.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: messages,
    });
    console.log("response.data", response.data)
    return response.data;
  };

  return await chatGptApi(question);
};

module.exports = generate;
