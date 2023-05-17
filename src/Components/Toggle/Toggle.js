import React from "react";
import "./Toggle.css";

function Toggle() {
  return (
    <div className="switch_toogle">
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
    </div>
  );
}

export default Toggle;
