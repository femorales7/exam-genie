
export const handleAddPlayer = (playerName, players, setPlayers) => {
  if (playerName) {
    setPlayers([...players, { name: playerName, score: 0 }]);
  }
};


