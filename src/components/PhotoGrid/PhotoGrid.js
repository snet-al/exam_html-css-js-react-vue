import React from 'react';
import './PhotoGrid.css';

function PhotoGrid({ imageUrl, title, url, isGrayscale }) {
  const imageStyle = {
    filter: isGrayscale ? 'grayscale(100%)' : 'none'
  };

  return (
    <figure className={`grid-item ${isGrayscale ? 'grayscale' : ''}`}>
      <img src={imageUrl} alt={title} style={imageStyle} />
      <figcaption className="text">
        <h3>{title}</h3>
        <p>{url}</p>
      </figcaption>
    </figure>
  );
}

export default PhotoGrid;
