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
        <span className="slider round"></span>
      </label>
      <aside>Make Photos Grayscale</aside>
    </section>
  );
}

export default SwitchContainer;
