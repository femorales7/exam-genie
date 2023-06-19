const db = require('../connection');

const addQuestions = (questionObject) => {
  const query = `INSERT INTO questions (user_id, question, question_option, answer, feedback) VALUES ($1, $2, $3, $4, $5);`;
  const { question, options, answer, feedback } = questionObject;
  console.log("From query", options)
  const user_id = 1;

  return db.query(query, [user_id, question, options, answer, feedback])
    .then(data => {
      console.log('Question saved to the database from addQuestions.');
    })
    .catch((err) => {
      console.log('Error saving question to the database:', err.message);
    });
}

module.exports = { addQuestions };
