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
      { role: "user", content: "I need Math Calculus  Differentiation 1 question  with feedback. The question has 5 multiple choice. And make question as object inside array. And has answer, feedback for each options" },
      { role: "assistant", content: `question = {
        "question": "What is the derivative of f(x) = 3x^2 + 2x - 1?",
        "options": [
            {
                "text": "a) 6x + 2",
                "is_correct": False,
                "feedback": "That's not the correct derivative. Check your calculations again."
            },
            {
                "text": "b) 3x^2 + 2x",
                "is_correct": False,
                "feedback": "That's not the correct derivative. Make sure you apply the power rule correctly."
            },
            {
                "text": "c) 6x + 2",
                "is_correct": True,
                "feedback": "Correct! The derivative of 3x^2 is 6x, and the derivative of 2x is 2."
            },
            {
                "text": "d) 3x^2 + 1",
                "is_correct": False,
                "feedback": "That's not the correct derivative. Double-check your calculations."
            },
            {
                "text": "e) 3x^2 + 2",
                "is_correct": False,
                "feedback": "That's not the correct derivative. Pay attention to the coefficient of x."
            }
        ]
    }
    ` },
      { role: "user", content: `${question}.` },
    ];
    const response = await openaiClient.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: messages,
    });

    console.log("response.data", response.data)
    console.log("response.data.choices[0].message.content", response.data.choices[0].message.content);
    return response.data.choices[0].message.content;
  };

  return await chatGptApi(question);
};

module.exports = generate;
