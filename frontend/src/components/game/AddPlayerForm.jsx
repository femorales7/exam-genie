import React, { useState } from "react";
import Logo from "../../images/Exam-genie1.png";
import "../../styles/addPlayerForm.scss";

const AddPlayerForm = ({ onAddPlayer }) => {
  const [playerName, setPlayerName] = useState(""); // Add state for player name

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onAddPlayer(playerName); // Call the handleAddPlayer function
    setPlayerName(""); // Reset the player name input
  };

  const handleNameChange = (e) => {
    setPlayerName(e.target.value);
    // Update the player name state
  };

  return (
    
    <div class="AddPlayer-box">
      <h2>New Player</h2>
      <form className="formAddPlayer" onSubmit={handleFormSubmit}>
        <div class="nickName-box">
          <input
            className="nickName"
            type="text"
            placeholder="Enter nickname"
            value={playerName} // Bind the player name state to the input value
            onChange={handleNameChange}
          />
          <label>NickName</label>
        </div>

        <button className="button-pushable" type="submit" value="Add user">
          <span class="button-shadow"></span>
          <span class="button-edge"></span>
          <span class="button-front text">Done</span>
        </button>

      </form>
    </div>
   
  );
};

export default AddPlayerForm;
