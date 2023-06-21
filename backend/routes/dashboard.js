const router = require("express").Router();
const { getQuestionsByUserAndExams } = require("../db/queries/getQuestionsByUser");


router.get('/', (req, res) => {
    getQuestionsByUserAndExams(1)
    .then((data) => {
      console.log("questions", data)
      res.json(data);
    })
    .catch((err) => {
      console.error(err);
      res.send(err);
    });
})

module.exports = router;
