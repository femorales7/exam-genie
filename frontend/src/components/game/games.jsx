import React, { useState } from "react";
import data from "../../components/topics/topics.json";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../pages/Particle";
import OptionsForm from "./optionsForm";
import QuestionCard from "./questionCard";

import { useNavigate } from "react-router-dom";
import generateQuestion from "../generatedQuestion/generateQuestion";
import ReactLoading from "react-loading";
import "../../styles/Game.scss";
import "../../styles/ExamGenerated.scss";

import AddPlayerForm from "./AddPlayerForm";

function Game() {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [players, setPlayers] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");

  const [selectedOption, setSelectedOption] = useState("");
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);

  const [howManyQuestion, setHowManyQuestion] = useState("5");
  const [correct, setCorrect] = useState(false);
  const [incorrect, setIncorrect] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showResults, setShowResults] = useState(false);
  const [winner, setWinner] = useState("");
  const [ShowPie, setShowPie] = useState(false);

  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
    setSelectedSubcategory(null);
    setSelectedTopic(null);
  };

  const handleSubcategorySelection = (subcategory) => {
    setSelectedSubcategory(subcategory);
    setSelectedTopic(null);
  };

  const handleTopicSelection = (topic) => {
    setSelectedTopic(topic);
  };

  // send information to the funcions for generate questions from API
  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(false);
    const questionData = await generateQuestion(
      selectedCategory,
      selectedSubcategory,
      setLoading,
      selectedTopic,
      howManyQuestion
    );

    setQuestions(questionData);
  };
  // validation of answer and set new player
  const handleOptionChange = (e) => {
    const userAnswer = e.target.value;
    setSelectedOption(userAnswer);

    if (userAnswer === questions[currentQuestion].answer) {
      setCorrect(true);
      const currentPlayer = players[currentPlayerIndex];
      const updatedPlayers = [...players];
      updatedPlayers[currentPlayerIndex] = {
        ...currentPlayer,
        score: currentPlayer.score + 1,
      };
      setPlayers(updatedPlayers);
    } else {
      setIncorrect(true);
    }
  };

  // Move to the next question
  const nextQ = (e) => {
    e.preventDefault();
    setCorrect(false);
    setIncorrect(false);
    console.log("currentQuestion", currentQuestion);
    console.log("questions.length", questions.length);

    if (currentQuestion + 1 <= questions.length) {
      const nexQuestion = currentQuestion + 1;
      setCurrentQuestion(nexQuestion);
    }
    if (currentQuestion + 1 === questions.length) {
      console.log("currentQuestion inside if", currentQuestion);
      setShowResults(true);
      setShowPie(true);

      //set the winner of the game
      const currentWinner = players.reduce((previus, current) => {
        if (current.score > previus.score) {
          return `The winner is ${current.name}`;
        } else if (previus.score > current.score) {
          return `The winner is ${previus.name}`;
        } else {
          return "The Game Tied";
        }
      });
      console.log(currentWinner);
      setWinner(currentWinner);
    }
    setSelectedOption("");
    // Move to the next player
    const nextPlayerIndex = (currentPlayerIndex + 1) % players.length;
    setCurrentPlayerIndex(nextPlayerIndex);
  };

  console.log("showResults", showResults);
  const handleAddPlayer = (playerName) => {
    if (playerName) {
      setPlayers([...players, { name: playerName, score: 0 }]);
      handleCloseModal();
    }
  };

  // remove players of the list
  const handleRemovePlayer = (index) => {
    const updatedPlayers = [...players];
    updatedPlayers.splice(index, 1);
    setPlayers(updatedPlayers);
  };
  const chartData = players.map((player) => ({
    playerName: player.name,
    data: {
      labels: ["correct", "wrong"],
      datasets: [
        {
          label: "results",
          data: [player.score, questions.length - player.score],
          // data: [3, 5],
          backgroundColor: ["blue", "red"],
          borderColor: "black",
        },
      ],
    },
  }));

  console.log("chartData", chartData);
  const chartOptions = {
    responsive: true,
    title: {
      display: true,
      text: "Pia chart",
    },
  };

  const finishExam = () => {
    // Calculate scores and update the status of players
    const updatedPlayers = players.map((player) => ({
      ...player,
      score: player.score + score,
    }));

    // Update player status
    setPlayers(updatedPlayers);

    // Redirect to dashboard page or show final results
    navigate("/");
  };

  const handleAddPlayerModal = () => {
    setIsModalOpen(true); // Open the modal form
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal form
  };
  return (
    <section id="background">
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <main>
            <div className="optionForm">
              <OptionsForm
                data={data}
                selectedCategory={selectedCategory}
                selectedSubcategory={selectedSubcategory}
                handleCategorySelection={handleCategorySelection}
                handleSubcategorySelection={handleSubcategorySelection}
                handleTopicSelection={handleTopicSelection}
                onSubmit={onSubmit}
                setHowManyQuestion={setHowManyQuestion}
                players={players}
                handleRemovePlayer={handleRemovePlayer}
                handleAddPlayerModal={handleAddPlayerModal}
              />
            </div>

            {isModalOpen && (
              <AddPlayerForm
                players={players}
                setPlayers={setPlayers}
                onAddPlayer={handleAddPlayer}
                onCloseModal={handleCloseModal}
              />
            )}

            {!loading ? (
              <div className="Loadin">
                <ReactLoading
                  type={"bars"}
                  color={"#03fc4e"}
                  height={200}
                  width={200}
                  className="reactLoading"
                />
              </div>
            ) : (
              <div className="">
                {questions && (
                  <QuestionCard
                    questions={questions}
                    currentQuestion={currentQuestion}
                    currentPlayerIndex={currentPlayerIndex}
                    players={players}
                    selectedOption={selectedOption}
                    answer={answer}
                    feedback={feedback}
                    handleOptionChange={handleOptionChange}
                    onSubmit={onSubmit}
                    finishExam={finishExam}
                    nextQ={nextQ}
                    correct={correct}
                    incorrect={incorrect}
                  />
                )}
                <>
                <div className="results">
                  {showResults && (
                    <div className="final-results">
                      <h1>Final Results</h1>
                      {chartData.map((data) => (
                        <div key={data.playerName}>
                          <h2>{data.playerName}</h2>
                          <Pie data={data.data} options={chartOptions} />
                          <h1>
                            {
                              players.find(
                                (player) => player.name === data.playerName
                              ).score
                            }{" "}
                            out of {questions.length} correct - (
                            {(players.find(
                              (player) => player.name === data.playerName
                            ).score /
                              questions.length) *
                              100}
                            %)
                          </h1>
                        </div>
                      ))}
                      <h1> {winner}</h1>
                      <button className="button-pushable" onClick={finishExam}>
                        <span class="button-shadow"></span>
                        <span class="button-edge"></span>
                        <span class="button-front text">Finish Exam</span>
                      </button>
                    </div>
                  )}
                  </div>
                </>
              </div>
            )}
          </main>
        </Container>
      </Container>
    </section>
  );
}

export default Game;
