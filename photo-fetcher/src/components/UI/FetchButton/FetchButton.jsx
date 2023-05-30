import React from 'react';

const FetchButton = ({ handleFetchClick , text }) => {
  return (
    <button className="fetch-button" onClick={handleFetchClick}>
      {text}
    </button>
  );
};

export default FetchButton;
