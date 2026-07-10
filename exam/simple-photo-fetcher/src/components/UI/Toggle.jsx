import react from "react";

function Toggle({ isOn, onToggle }) {
  return (
    <label className="toggle">
      <input type="checkbox" checked={isOn} onChange={onToggle} />
      <span className="slider"></span>
    </label>
  );
}