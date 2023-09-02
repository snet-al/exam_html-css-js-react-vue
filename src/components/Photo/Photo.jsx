import React from "react";
import Image from "../Image/Image";

const Photo = ({ src, alt, style }) => {
  return <Image src={src} alt={alt} style={style} />;
};

export default Photo;
