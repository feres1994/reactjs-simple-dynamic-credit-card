import React from "react";
const renderCardNumber = number => {
  number = number.toString();
  {
    /*Convert CARD NUMBER TOSTRING*/
  }
  let resultStr = "";
  {
    /*INIAL LET */
  }
  {
    /*EVRY 4 ELEMET PUT SPACE*/
  }
  for (let i = 0; i < number.length; i += 4) {
    resultStr += number.slice(i, i + 4) + " ";
  }
  return resultStr.trim();
  {
    /*Cut space in the and end*/
  }
};

const renderValid = number => {
  number = number.toString();
  return number.slice(0, 2) + "/" + number.slice(2);
};
const Credit = props => (
  <div className="my-card">
    <div className="credit-card-title">
      <h1>CREDIT CARD</h1>
    </div>
    <div className="credit-card-chip">
      <img
        src="https://uploads.codesandbox.io/uploads/user/d0bb8d01-630c-4782-b308-b54cce71db59/TIR3-chip-img.png"
        className="chip"
        alt=""
      />
    </div>
    <div className="code-card">
      <h2 className="code">{renderCardNumber(props.cardNumber)}</h2>
    </div>
    <div className="name-valid-thru">
      <div className="name">
        <h3>{props.cardName}</h3>
      </div>
      <div className="valid-logo">
        <h3>{renderValid(props.validT)}</h3>
        <img
          src="https://uploads.codesandbox.io/uploads/user/d0bb8d01-630c-4782-b308-b54cce71db59/isvG-logo.jpg"
          className="logo"
          alt=""
        />
      </div>
    </div>
  </div>
);
export default Credit;
