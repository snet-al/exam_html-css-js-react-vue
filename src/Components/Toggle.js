import React from "react";
import "./Toggle.css"

function Toggle() {
  return (
    <div class="switch_toogle">
      <label class="switch">
        <input type="checkbox" />
        <span class="slider round"></span>
      </label>
    </div>
  );
}

export default Toggle;
