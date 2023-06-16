import React, { useState } from "react";
import data from "../../components/topics/topics.json";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../pages/Particle";
import OptionsForm from "./optionsForm";
import QuestionCard from "./questionCard";
import PlayerList from "./playersList";
import { useNavigate } from "react-router-dom";
import generateQuestion from "../generatedQuestion/generateQuestion";
// import useApplicationData, { ACTIONS } from "./addplayerModal";
import { handleAddPlayer } from "./playerUtils";
import AddPlayerForm from "./AddPlayerForm";

import style from "../../index.module.css";

function Game() {
  // const { handleAddPlayerModal, isModalOpen } = useApplicationData();
  // console.log("isModalOpen", isModalOpen)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [players, setPlayers] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [playerNameInput, setPlayerNameInput] = useState("");
  const [howManyQuestion, setHowManyQuestion] = useState("5");

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

  const onSubmit = async (e) => {
    e.preventDefault();
    const questionData = await generateQuestion(
      selectedCategory,
      selectedSubcategory,
      selectedTopic,
      setQuestion,
      setOptions,
      setAnswer,
      setFeedback,
      setSelectedOption
    );

    setQuestions(questionData);
    console.log("return from server", questionData);
  };

  const handleOptionChange = (e) => {
    const userAnswer = e.target.value;
    setSelectedOption(userAnswer);

    const currentPlayer = players[currentPlayerIndex];

    if (userAnswer === questions[currentQuestion].answer) {
      alert("Correct");
      const updatedPlayers = [...players];
      updatedPlayers[currentPlayerIndex] = {
        ...currentPlayer,
        score: currentPlayer.score + 1,
      };
      setPlayers(updatedPlayers);
    } else {
      alert("Incorrect");
    }

    // Move to the next player
    const nextPlayerIndex = (currentPlayerIndex + 1) % players.length;
    setCurrentPlayerIndex(nextPlayerIndex);
  };

  // Move to the next question
  const nextQ = (e) => {
    e.preventDefault();

    if (currentQuestion < questions.length) {
      const nexQuestion = currentQuestion + 1;
      setCurrentQuestion(nexQuestion);
    } else {
      navigate("/dashboard");
    }
  };

  const handleAddPlayer = (playerName) => {
    if (playerName) {
      setPlayers([...players, { name: playerName, score: 0 }]);
    }; // Call the handleAddPlayer function
  };

  const handleRemovePlayer = (index) => {
    const updatedPlayers = [...players];
    updatedPlayers.splice(index, 1);
    setPlayers(updatedPlayers);
  };

  const finishExam = () => {
    // Calcular las puntuaciones y actualizar el estado de los jugadores
    const updatedPlayers = players.map((player) => ({
      ...player,
      score: player.score + score,
    }));

    // Actualizar el estado de los jugadores
    setPlayers(updatedPlayers);

    // Redirigir a la página de tablero o mostrar los resultados finales
    navigate("/dashboard");
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
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <main className={style.maingame}>
                <div className="sideBar">
                  <div className="optionForm">
                    <OptionsForm
                      data={data}
                      selectedCategory={selectedCategory}
                      selectedSubcategory={selectedSubcategory}
                      handleCategorySelection={handleCategorySelection}
                      handleSubcategorySelection={handleSubcategorySelection}
                      handleTopicSelection={handleTopicSelection}
                      onSubmit={onSubmit}
                      setHowManyQuestion = {setHowManyQuestion}
                    />
                  </div>
                  <div className="playerList">
                    <PlayerList
                      players={players}
                      handleRemovePlayer={handleRemovePlayer}
                      // handleAddPlayer={handleAddPlayer}
                      handleAddPlayerModal={handleAddPlayerModal}
                    />
                  </div>
                </div>
                {isModalOpen && <AddPlayerForm onAddPlayer={handleAddPlayer} onCloseModal={handleCloseModal} />}
                <div>
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
                    />
                  )}
                </div>
              </main>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Game;
