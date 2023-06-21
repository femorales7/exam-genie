const db = require("../connection");

const getQuestionsByUser = (userId) => {
  let query = `SELECT questions.* FROM questions JOIN users ON users.id = user_id WHERE user_id = $1;`;
  return db
  .query(query, [userId])
  .then((data) => {
    return data.rows;
  })
  .catch((err) => {
    console.log(err.message);
  });
};

module.exports = { getQuestionsByUser };
