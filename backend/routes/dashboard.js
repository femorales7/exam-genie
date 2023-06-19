const router = require("express").Router();
const getQuestionsByUserQuery = require("../db/queries/getQuestionsByUser");


router.get('/', (req, res) => {
    getQuestionsByUserQuery.getQuestionsByUser(1)
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
