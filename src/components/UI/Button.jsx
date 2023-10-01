import React from "react";

const Button = (props) => {
  return (
    <button className="fetch-button" onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default Button;