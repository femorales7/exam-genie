const db = require('../connection');

const addExams = (exam) => {
  const query = `INSERT INTO exams (user_id, name, date) VALUES ($1, $2, NOW());`;
  const user_id = 1;
  const { createExam } = exam;

  console.log()
  return db.query(query, [user_id, createExam])
    .then(data => {
      console.log('exam saved to the database');
    })
    .catch((err) => {
      console.log('Error saving exams to the database:', err.message);
    });
}

module.exports = { addExams };
