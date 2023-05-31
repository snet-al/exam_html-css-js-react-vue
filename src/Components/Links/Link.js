import React from "react";

function Link({ href }) {
  return (
    <a target="_blank" rel="noreferrer" href={href}>
      https://picsum.photos/
    </a>
  );
}

export default Link;
