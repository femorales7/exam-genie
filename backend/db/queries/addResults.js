const db = require('../connection');

const addResults = (resultObject) => {
  const query = `INSERT INTO results (user_id, user_answer, score) VALUES ($1, $2, $3);`;
  const { finalScore, userInput } = resultObject;
  const user_id = 1;
  console.log("qurey", resultObject);

  return db.query(query, [user_id, userInput, finalScore])
    .then(data => {
      console.log('result saved to the database.');
    })
    .catch((err) => {
      console.log('Error saving question to the database:', err.message);
    });
}

module.exports = { addResults };
