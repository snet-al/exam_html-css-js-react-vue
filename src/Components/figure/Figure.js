import React from "react";
import Img from "../Img/Img.js";
import Link from "../Links/Link.js";
function Figure({ id, image, author, ischecked }) {
  return (
    <figure className="card" key={id}>
      <Img ischecked={ischecked} image={image} />
      <figcaption className="card-text">
        <p>{author}</p>
        <Link image={image} />
      </figcaption>
    </figure>
  );
}

export default Figure;
