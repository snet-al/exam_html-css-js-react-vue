import React from "react";
import Img from "../Img.js";
import Link from "../Link.js";
function Figure({ id, image, author }) {
  return (
    <figure className="card" key={id}>
      <Img image={image} />
      <figcaption className="card-text">
        <p>{author}</p>
        <Link image={image} />
      </figcaption>
    </figure>
  );
}

export default Figure;
