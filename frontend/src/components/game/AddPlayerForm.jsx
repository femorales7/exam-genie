import React, { useState } from "react";
import Logo from "../../images/Exam-genie1.png";
import "../../styles/addPlayerForm.scss";
import { handleAddPlayer } from "./playerUtils";



const AddPlayerForm = ({ onAddPlayer, onCloseModal }) => {
  const [playerName, setPlayerName] = useState(""); // Add state for player name

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleAddPlayer(playerName, onAddPlayer); // Call the handleAddPlayer function
    setPlayerName(""); // Reset the player name input
    onCloseModal();
  };

  const handleNameChange = (e) => {
    setPlayerName(e.target.value);
     // Update the player name state
  };

  return (
    <div className="photo-details-modal">
      <form onSubmit={handleFormSubmit}>
       <div class="containerADD">
        <div class="brand-logo"></div>
        <div class="brand-title">EXAM-GENIE</div>
        <div class="inputs">
          <label className="labelNickName">NickName</label>
          <input
            className="nickName"
            type="text"
            placeholder="Enter nickname"
            value={playerName} // Bind the player name state to the input value
            onChange={handleNameChange} // Handle changes in the input
          />

          <button className="DONE" type="submit" value="Add user">
            DONE
          </button>
        </div>
        <a className="logoAdd" href="../../images/Exam-genie1.png"></a>
      </div>
      </form>
    </div>
  );
};

export default AddPlayerForm;
