import React from "react";
import Img from "../Img/Img.js";
import Link from "../Links/Link.js";
function Figure({ id, href, author }) {
  return (
    <figure className="card" key={id}>
      <Img href={href} />
      <figcaption className="card-text">
        <p>{author}</p>
        <Link href={href} />
      </figcaption>
    </figure>
  );
}

export default Figure;
