import React from "react";
import '../../css/app.css';

function Toggle({ switchClass = 'switch', sliderClass = 'slider', toggleLabel = 'Toggle', grayscale, setGrayscale}) {
  return (
    <label className={switchClass}>
      <input
        type="checkbox"
        checked={grayscale}
        onChange={(e) => setGrayscale(e.target.checked)} />
      <span className={sliderClass}> </span>
      {toggleLabel}
    </label>
  );
}

export default Toggle;