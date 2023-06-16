import React from "react";
import ButtonOptions from "../generatedQuestion/ButtonOptions";

const OptionsForm = ({
  data,
  selectedCategory,
  selectedSubcategory,
  handleCategorySelection,
  handleSubcategorySelection,
  handleTopicSelection,
  onSubmit,
}) => {
  return (
    <div className="options">
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
        <input type="submit" value="Start exam" />
      </form>
    </div>
  );
};

export default OptionsForm;
