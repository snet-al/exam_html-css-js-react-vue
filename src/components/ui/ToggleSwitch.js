import React from "react";

function SwitchContainer() {
  const handleToggleSwitch = () => {};

  return (
    <section className="switchContainer">
      <label className="switch">
        <input
          type="checkbox"
          id="toggleSwitch"
          onChange={handleToggleSwitch}
        />
        <span className="slider-round"></span>
      </label>
      <span>Make Photos Grayscale</span>
    </section>
  );
}

export default SwitchContainer;
