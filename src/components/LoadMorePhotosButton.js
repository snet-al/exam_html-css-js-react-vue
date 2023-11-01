import React from "react";

function LoadMoreButton(props) {
  const { buttonText, onClick } = props;

  return (
    <button className="load-more-button-container" onClick={onClick}>
      {buttonText}
    </button>
  );
}

export default LoadMoreButton;
