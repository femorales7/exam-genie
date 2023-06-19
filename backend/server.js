// load .env data into process.env
require("dotenv").config();

// Web server config
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const cors = require("cors");
const { Configuration, OpenAIApi } = require("openai");
const generate = require("./generate")
const extractQuestionData = require('./helpFunction/extractQuestions')
const { addQuestions } = require("./db/queries/addQuestions")
const { addResults } = require("./db/queries/addResults")
// const { saveResponseToDatabase } = require('./database');

// import dotenv from "dotenv"
// dotenv.config();

const openaiApiKey = process.env.OPENAI_KEY;

if (!openaiApiKey) {
  console.error("OPENAI_KEY is not set");
  process.exit(1);
}

const configuration = new Configuration({
  apiKey: openaiApiKey,
});

const openai = new OpenAIApi(configuration);

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyparser.json());

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(
  "/styles",
  sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public/styles",
    isSass: false, // false => scss, true => sass
  })
);
app.use(express.static("public"));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const userApiRoutes = require("./routes/users-api");
const widgetApiRoutes = require("./routes/widgets-api");
const usersRoutes = require("./routes/users");

const dashboardRoutes = require("./routes/dashboard")

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use("/api/users", userApiRoutes);
app.use("/api/widgets", widgetApiRoutes);
app.use("/users", usersRoutes);

app.use("/dashboard", dashboardRoutes);
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.post("/generate", async (req, res) => {
  const question = req.body.question
  try{
    const user_question = await generate(question, openai);



      console.log('Question saved to the database.');


    res.json({response: user_question})
    extractQuestionData(user_question)

  }catch(error) {
    console.error(error)
    res.status(500).send("Internal error server")
  }
})

app.post("/result", (req, res) => {
  const userAnswer = req.body
  console.log("sever side", userAnswer);
  addResults(userAnswer)
  .then(() => {
    console.log('user result save')
  })
  .catch((error) => {
    console.error(error);
  })

})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
}
);
module.exports = openai;
