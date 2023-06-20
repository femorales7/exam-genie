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
        {SelectedOption ? SelectedOption : ""}
      </div>
      <div className={`menu ${showOptions ? "visible" : ""}`}>
        <select id="opcionesDespl" name="opciones" required onChange={(e) => handleSelectedOption(e.target.value)}>
          <option value="">-- Select an option --</option>
          {options.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>
    </div>
  );
  
};
export default ButtonOptions;
