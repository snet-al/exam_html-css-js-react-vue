import React from "react";

function Link({ image }) {
  return (
    <a target="_blank" rel="noreferrer" href={image}>
      https://picsum.photos/
    </a>
  );
}

export default Link;
