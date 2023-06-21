const db = require("../connection");

const getQuestionsByUserAndExams = (userId) => {
  let query = `SELECT questions.*, exams.id, users.name, exams.name as exam_name FROM questions JOIN users ON users.id = user_id JOIN exams ON users.id = exams.user_id WHERE exams.user_id = $1;`;
  return db
  .query(query, [userId])
  .then((data) => {
    return data.rows;
  })
  .catch((err) => {
    console.log(err.message);
  });
};

module.exports = { getQuestionsByUserAndExams };
