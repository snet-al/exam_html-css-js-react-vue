import React from "react";
import '../../css/app.css';

function Toggle({ switchClass = 'switch', sliderClass = 'slider', grayscale, setGrayscale, children}) {
  return (
    <label className={switchClass}>
      <input
        type="checkbox"
        checked={grayscale}
        onChange={(e) => setGrayscale(e.target.checked)} />
      <span className={sliderClass}> </span>
      {children}
    </label>
  );
}

export default Toggle;