import React from 'react';
import './PhotoGrid.css';

function PhotoGrid({ imageUrl, title, url }) {
  return (
    <figure className="grid-item">
      <img src={imageUrl} alt={title} />
      <figcaption className="text">
        <h3>{title}</h3>
        <p>{url}</p>
      </figcaption>
    </figure>
  );
}

export default PhotoGrid;
