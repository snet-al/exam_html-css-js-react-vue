import React from "react";
import "./ButtonToggle.css";

function ToggleButton() {
  
  return (
    <div className="switch-toogle">
      <label className="switch">
        <input type="checkbox"  />
        <span className="slider round"></span>
      </label>
    </div>
  );
}

export default ToggleButton;
