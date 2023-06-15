const db = require('../connection');

const addQuestions = (post) => {
  const query = `INSERT INTO questions (user_id,  question, question_option, answer, feedback) VALUES ($1, $2, $3, $4, $5);`;

  const user_id = 1;
  const question = post.extractQuestion;
  const question_option = post.options.join();

  const answer = post.answer;
  const feedback = post.feedback;

  return db.query(query, [user_id, question, question_option, answer, feedback])
  .then(data => {
    // console.log('data', data.rows);
    return data.rows;
  })
  .catch((err) => {
    console.log(err.message);
  });
}

module.exports = { addQuestions };
