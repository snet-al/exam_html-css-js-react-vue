import React from 'react';
import './Photo.css';

function Photo({ imageUrl, title, url }) {
  return (
    <figure className="grid-item">
      <img src={imageUrl} alt={title} />
      <figcaption className="text">
        <h3>{title}</h3>
        <h4>{url}</h4>
      </figcaption>
    </figure>
  );
}

export default Photo;
