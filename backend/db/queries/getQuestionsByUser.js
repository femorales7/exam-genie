const db = require("../connection");

const getQuestionsByUserAndExams = () => {
  let query = `SELECT questions.*, exams.id, exams.name  FROM questions JOIN exams ON questions.exam_id = exams.id  GROUP BY questions.id, exams.id;`;
  return db
  .query(query)
  .then((data) => {
    return data.rows;
  })
  .catch((err) => {
    console.log(err.message);
  });
};

module.exports = { getQuestionsByUserAndExams };
