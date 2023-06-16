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
            <button
              className="button-85"
              onClick={() => handleRemovePlayer(index)}
            >
              {" "}
              Remove
            </button>
          </div>
        </div>
      ))}

      <div className="buttonAdd">
        <button className="button-85" onClick={handleAddPlayerModal}>
          Add Player
        </button>
      </div>
    </div>
  );
};

export default PlayerList;
