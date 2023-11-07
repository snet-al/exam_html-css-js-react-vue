import React from "react";

function ButtonAction(props) {
  const { buttonText, onClick } = props;

  return (
    <button className="fetchPhotos" onClick={onClick}>
      {buttonText}
    </button>
  );
}

export default ButtonAction;
