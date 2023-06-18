import React, { useState } from "react";
import ButtonOptions from "../generatedQuestion/ButtonOptions";
import PlayerList from "./playersList";

const OptionsForm = ({
  data,
  selectedCategory,
  selectedSubcategory,
  handleCategorySelection,
  handleSubcategorySelection,
  handleTopicSelection,
  onSubmit,
  setHowManyQuestion,
  players,
  handleRemovePlayer,
  handleAddPlayerModal,
}) => {
  const handleHowManyQuestions = (event) => {
    const numQuestions = event.target.value;
    setHowManyQuestion(numQuestions);
  };
  return (
    <div className="optionsgame">
      <form onSubmit={onSubmit}>
        <h2>Topic</h2>
        <div className="options-button">
          <ButtonOptions
            options={Object.keys(data)}
            handleOptionSelection={handleCategorySelection}
          />
        </div>
        <h2>Sub-Topic</h2>
        <div className="options-button">
          {selectedCategory && (
            <ButtonOptions
              options={Object.keys(data[selectedCategory])}
              handleOptionSelection={handleSubcategorySelection}
            />
          )}
        </div>
        <h2>Detail</h2>
        <div className="options-button">
          {selectedSubcategory && (
            <ButtonOptions
              options={data[selectedCategory][selectedSubcategory]}
              handleOptionSelection={handleTopicSelection}
            />
          )}
        </div>
        <h2 for="question number">How many questions?</h2>
        <select onChange={handleHowManyQuestions}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
        <input type="submit" value="Start exam" className="exam-submit--form" />
        
      </form>
      {players && (
          <div className="playerList">
            <PlayerList
              players={players}
              handleRemovePlayer={handleRemovePlayer}
              handleAddPlayerModal={handleAddPlayerModal}
            />
          </div>
        )}
    </div>
  );
};

export default OptionsForm;
