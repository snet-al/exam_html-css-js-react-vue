import React from "react";

function Figure({ id, image, author }) {
  return (
    <article className="card" key={id}>
      <img src={image} alt="" />
      <figcaption className="card_text">
        <p>{author}</p>
        <a href="https://picsum.photos/"> https://picsum.photos/</a>
      </figcaption>
    </article>
  );
}

export default Figure;
