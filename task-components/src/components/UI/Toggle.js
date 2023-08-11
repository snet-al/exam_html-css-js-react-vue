import React, { useState } from "react";

const Toggle = ({ onChange }) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
    if (onChange) {
      onChange(!isToggled);
    }
  };

  return (
    <div>
      <label className="switch">
        <input type="checkbox" checked={isToggled} onChange={handleToggle} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default Toggle;
