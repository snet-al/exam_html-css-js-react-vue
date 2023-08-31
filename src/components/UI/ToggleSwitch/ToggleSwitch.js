import React, { useState } from "react";
import "../../../App.css";

const ToggleSwitch = ({ onChangeToggle }) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
    if (onChangeToggle) {
      onChangeToggle(!isToggled);
    }
  };

  return (
    <section>
      <label className="switch">
        <input type="checkbox" checked={isToggled} onChange={handleToggle} />
        <span className="slider round"></span>
      </label>
      <span className="toggle-text">Make photos grayscale</span>
    </section>
  );
};

export default ToggleSwitch;