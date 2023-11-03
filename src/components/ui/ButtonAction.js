import React from "react";

const handleLoadMorePhotos = () => {
  console.log("Loading more photos...");
};

function FetchPhotos(props) {
  const { buttonText, onClick } = props;

  return (
    <button className="fetchPhotos" onClick={onClick}>
      {buttonText}
    </button>
  );
}

export default FetchPhotos;
