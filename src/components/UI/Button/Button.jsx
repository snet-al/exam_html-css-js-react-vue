import React from "react";

const Button = ({ handleFetchClick, text, className }) => {
  return (
    <button className={className} onClick={handleFetchClick}>
      {text}
    </button>
  );
};

export default Button;
