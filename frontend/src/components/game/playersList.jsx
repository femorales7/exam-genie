import React from "react";

const PlayerList = ({ players, handleRemovePlayer, handleAddPlayerModal }) => {
  return (
    <div className="player-list">
      <h2>Scoreboard</h2>

      {players.map((player, index) => (
        <div className="name" key={index}>
          <div>
            <span>{player.name} </span>
          </div>
          <div>
            <span>Score: {player.score}</span>
          </div>
          <div className="">
          <button class="button-pushable" onClick={() => handleRemovePlayer(index)}>
          <span class="button-shadow"></span>
          <span class="button-edge"></span>
          <span class="button-front text">Remove</span>
        </button>
          
          </div>
        </div>
      ))}

      <div className="buttonAdd">
      <button class="button-pushable" onClick={handleAddPlayerModal}>
          <span class="button-shadow"></span>
          <span class="button-edge"></span>
          <span class="button-front text">Add Player</span>
        </button>

        
      </div>
    </div>
  );
};

export default PlayerList;
