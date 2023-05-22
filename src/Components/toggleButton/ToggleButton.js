import React from "react";
import "./ToggleButton.css";

function ToggleButton() {
  return (
    <div className="switch_toogle">
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
    </div>
  );
}

export default ToggleButton;
