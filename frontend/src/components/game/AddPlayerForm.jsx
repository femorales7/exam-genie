import React from "react";
import Logo from "../../images/Exam-genie1.png";
import "../../styles/addPlayerForm.scss";

const AddPlayerForm = ({}) => {
  return (
    <div className="photo-details-modal">
      {/* <form onSubmit={handleAddPlayer}> */}
       <div class="containerADD">
        <div class="brand-logo"></div>
        <div class="brand-title">EXAM-GENIE</div>
        <div class="inputs">
          <label className="labelNickName">NickName</label>
          <input
            className="nickName"
            type="email"
            placeholder="example@test.com"
          />

          <button className="DONE" type="submit" value="Add user">
            DONE
          </button>
        </div>
        <a className="logoAdd" href="../../images/Exam-genie1.png"></a>
      </div>
      {/* </form> */}
    </div>
  );
};

export default AddPlayerForm;
