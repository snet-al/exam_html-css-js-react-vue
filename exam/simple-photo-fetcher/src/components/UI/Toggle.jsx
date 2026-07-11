import react from "react";

function Toggle({ grayscale, setGrayscale }) {
  return (
    <label className="toggle">
      <input type="checkbox" checked={grayscale} onChange={() => setGrayscale(prev => !prev)} />
      <span className="slider"></span>
    </label>
  );
}

export default Toggle;