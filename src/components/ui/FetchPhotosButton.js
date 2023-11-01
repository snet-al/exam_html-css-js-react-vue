import React from "react";

function FetchPhotos(props) {
  const { buttonText, onClick } = props;

  return (
    <button id="fetchPhotos" onClick={onClick}>
      {buttonText}
    </button>
  );
}

export default FetchPhotos;
