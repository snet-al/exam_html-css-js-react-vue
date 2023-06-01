import React from "react";

const MorePhotosButton = ({ text, handleMorePhotosClick }) => {
  return (
    <div className="layout">
      <button className="more-photos-button" onClick={handleMorePhotosClick}>
        {text}
      </button>
    </div>
  );
};

export default MorePhotosButton;
