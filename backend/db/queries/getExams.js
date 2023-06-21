const db = require("../connection");

const getExams = (userId) => {
  let query = `SELECT exams.id, exams.name FROM exams JOIN users ON users.id = user_id WHERE user_id = $1;`;

  return db
  .query(query, [userId])
  .then((data) => {
    return data.rows;
  })
  .catch((err) => {
    console.log(err.message);
  });
};

module.exports = { getExams };
