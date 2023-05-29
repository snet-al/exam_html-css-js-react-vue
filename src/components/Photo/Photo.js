import React from 'react';
import './Photo.css';

function Photo({ imageUrl, title, url, isGrayscale }) {
  const imageStyle = {
    filter: isGrayscale ? 'grayscale(100%)' : 'none'
  };

  return (
    <figure className={`grid-item ${isGrayscale ? 'grayscale' : ''}`}>
      <img src={imageUrl} alt={title} style={imageStyle} />
      <figcaption className="text">
        <h3>{title}</h3>
        <h4>{url}</h4>
      </figcaption>
    </figure>
  );
}

export default Photo;
