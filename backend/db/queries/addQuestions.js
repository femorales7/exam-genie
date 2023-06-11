const db = require('../connection');

const addQuestions = (post) => {
  const query = `INSERT INTO questions (user_id, exam_id, question_type, question, answer) VALUES ($1, $2, $3, $4, $5);`;

  const user_id = post.user_id;
  const exam_id = post.exam_id;
  const question_type = post.question.type;
  const question = post.question;
  const answer = post.answer;

  return db.query(query, [user_id, exam_id, question_type, question, answer])
  .then(data => {
    console.log('data', data.rows);
    return data.rows;
  })
  .catch((err) => {
    console.log(err.message);
  });
}

module.exports = { addQuestions };
