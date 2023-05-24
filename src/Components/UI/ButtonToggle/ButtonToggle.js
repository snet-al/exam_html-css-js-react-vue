import React from "react";
import "./ButtonToggle.css";

function ToggleButton({ onCheckboxChange }) {
  const handleCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    onCheckboxChange(isChecked);
  };
  return (
    <div className="switch-toogle">
      <label className="switch">
        <input type="checkbox" onChange={handleCheckboxChange} />
        <span className="slider round"></span>
      </label>
    </div>
  );
}

export default ToggleButton;
