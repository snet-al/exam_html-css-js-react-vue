import React from "react";

function Button(props) {
  const { buttonText, onClick } = props;

  return (
    <button className="bttn" onClick={onClick}>
      {buttonText}
    </button>
  );
}

export default Button;
