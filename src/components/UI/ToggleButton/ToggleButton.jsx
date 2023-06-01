import React from 'react';

const ToggleButton = ({ grayscale, toggleGrayscale }) => {
  return (
    <div className="toggle-button">
      <label className="switch">
        <input type="checkbox" checked={grayscale} onChange={toggleGrayscale} />
        <span className="slider round"></span>
      </label>
      <span className="text-paragraph">Make photos grayscale</span>
    </div>
  );
};

export default ToggleButton;
