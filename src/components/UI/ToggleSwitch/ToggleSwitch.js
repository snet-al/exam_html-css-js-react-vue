import React from "react";
import "../../../App.css";
const ToggleSwitch = ({ onToggleHandler }) => {
  const handleToggle = (event) => {
    onToggleHandler(event.target.checked);
  };

  return (
    <section>
      <label className="switch">
        <input type="checkbox"  onChange={handleToggle} />
        <span className="slider round"></span>
      </label>
      <span className="toggle-text">Make photos grayscale</span>
    </section>
  );
};
export default ToggleSwitch;