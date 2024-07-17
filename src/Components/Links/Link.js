import React from "react";

function Link({ href }) {
  return (
    <a target="_blank" rel="noreferrer" href={href}>
     {href}
    </a>
  );
}

export default Link;
