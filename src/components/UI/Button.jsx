import React from "react";

const Button = (props) => {
  return (
    <button className="fetch-button">
      {props.text}
    </button>
  );
};

export default Button;