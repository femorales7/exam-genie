import style from "../../index.module.css";
import { useState } from "react";
import data from "../topics/topics.json";
import extractQuestionData from "./extractQuestionData";
import "../../styles/ExamGenerated.scss";

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
      <div onClick={() => setShowOptions(!showOptions)}>
        {SelectedOption ? SelectedOption : "Select option"}
      </div>
      {showOptions && (
        <div className="menu">
          {options.map((option) => (
            <div key={option} onClick={() => handleSelectedOption(option)}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ButtonOptions;
