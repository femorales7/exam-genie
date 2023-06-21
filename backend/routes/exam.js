const router = require("express").Router();
const { addExams } = require("../db/queries/addExams");
const { getExams } = require("../db/queries/getExams")


router.get('/', (req, res) => {
  getExams(1)
  .then((data) => {
    console.log("exam", data)
    res.json(data);
  })
  .catch((err) => {
    console.error(err);
    res.send(err);
  });
})

router.post("/", (req, res) => {
  const examName = req.body;
  console.log("server side exam", examName)
  addExams(examName)
  .then(() => {
    console.log('Save exam name')
  })
  .catch((error) => {
    console.error(error);
  })
})


module.exports = router;
