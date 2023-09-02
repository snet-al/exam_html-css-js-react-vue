import React from "react";

const Button = (props) => {
  return (
    <button className="layout-btn" onClick={props.onClick}>
      {props.title}
    </button>
  );
};

export default Button;
