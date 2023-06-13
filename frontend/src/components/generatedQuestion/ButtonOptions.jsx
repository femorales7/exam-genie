import style from "../../index.module.css";
import { useState } from "react";
import data from "../topics/topics.json";
import extractQuestionData from "./extractQuestionData";

const ButtonOptions = ({ options, handleOptionSelection }) => {
  const [SelectedOption, setSelectedOption] = useState(null);
  const [showOptions, setShowOptions] = useState(false);

  const handleSelectedOption = (option) => {
    setSelectedOption(option);
    handleOptionSelection(option);
    setShowOptions(false);
  };

  return (
    <div>
      <button onClick={() => setShowOptions(!showOptions)}>
        {SelectedOption ? SelectedOption : "Select option"}
      </button>
      {showOptions && (
        <ul>
          {options.map((option) => (
            <li key={option} onClick={() => handleSelectedOption(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ButtonOptions;