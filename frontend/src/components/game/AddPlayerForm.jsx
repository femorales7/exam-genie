import React from "react";
import Logo from "../../images/Exam-genie1.png"
import "../../styles/addPlayerForm.scss"


const AddPlayerForm = ({


}) => {
  return(

<div className="photo-details-modal">
      {/* <button
        className="photo-details-modal--close-button"
        // onClick={closeModal}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_428_287)">
            <path
              d="M14.0625 3.9375L3.9375 14.0625"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.0625 14.0625L3.9375 3.9375"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_428_287">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button> */}
      <div class="containerADD">
  <div class="brand-logo"></div>
  <div class="brand-title">EXAM-GENIE</div>
  <div class="inputs">
    <label className="labelNickName">NickName</label>
    <input className="nickName"type="email" placeholder="example@test.com" />
   
    <button className= "DONE"type="submit">DONE</button>
  </div>
  <a className="logoAdd" href="../../images/Exam-genie1.png"></a>
</div>
     
    </div>

)
};

export default AddPlayerForm