import React from "react";

const handleLoadMorePhotos = () => {
  console.log("Loading more photos...");
};

function ButtonAction(props) {
  const { buttonText, onClick } = props;

  return (
    <button
      className="fetchPhotos"
      onClick={handleLoadMorePhotos}
      buttonText="LoadMorePhotos"
    >
      {buttonText}
    </button>
  );
}

export default ButtonAction;
