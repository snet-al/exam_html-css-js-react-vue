import React from "react";

const Button = (props) => {
  return (
    <button className="layout-btn" onClick={props.onClick}>
      {props.btnText}
      {props.morePhotosBtn}
    </button>
  );
};

export default Button;
