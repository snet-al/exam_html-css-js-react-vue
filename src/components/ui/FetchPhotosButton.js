import React from "react";

function FetchPhotos(props) {
  const { buttonText, onClick } = props;

  return (
    <button className="fetchPhotos" onClick={onClick}>
      {buttonText}
    </button>
  );
}

export default FetchPhotos;
