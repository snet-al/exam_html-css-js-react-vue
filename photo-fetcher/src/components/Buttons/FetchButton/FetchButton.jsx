import React from 'react';
// import "../FetchButton/FetchButton.css"
// import "../../../index.css"

const FetchButton = ({ handleFetchClick , text }) => {
  return (
    <button className="fetch-button" onClick={handleFetchClick}>
      {text}
    </button>
  );
};

export default FetchButton;
