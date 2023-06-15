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
        <label>Topic</label>
        <ButtonOptions
          options={Object.keys(data)}
          handleOptionSelection={handleCategorySelection}
        />
        <h2>Sub-Topic</h2>
        {selectedCategory && (
          <ButtonOptions
            options={Object.keys(data[selectedCategory])}
            handleOptionSelection={handleSubcategorySelection}
          />
        )}
        Detail
        {selectedSubcategory && (
          <ButtonOptions
            options={data[selectedCategory][selectedSubcategory]}
            handleOptionSelection={handleTopicSelection}
          />
        )}
        <input type="submit" value="Start exam" />
      </form>
    </div>
  );
};

export default OptionsForm;
