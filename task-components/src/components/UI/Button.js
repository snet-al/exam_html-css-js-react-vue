import React from "react";

const Button = ({ onClick }) => {
  return (
    <button className="layout-btn" onClick={onClick}>
      Fetch New Photos
    </button>
  );
};

export default Button;
