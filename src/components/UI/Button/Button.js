import React from "react";

const Button = (props) => {
  return (
    <button className="layout-btn">
      {props.btnText}
    </button>
  );
};

export default Button;
