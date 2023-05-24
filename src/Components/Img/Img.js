import React from "react";
function Img({ image, ischecked }) {
  return <img src={image} alt="" className={ischecked ? "grayscale" : ""} />;
}

export default Img;
