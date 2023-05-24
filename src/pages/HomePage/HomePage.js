import React from 'react';
import './HomePage.css';
import { photos } from '../../store/dummyData';


function Toggle({ onChange }) {
  return (
    <label className="toggle">
      <input type="checkbox" onChange={onChange} />
      <span className="slider"></span>
    </label>
  );
}

function PhotoGrid({ imageUrl, title, url }) {
  return (
    <div className="grid-item">
      <img src={imageUrl} alt={title} />
      <div className="text">
        <h3>{title}</h3>
        <p>{url}</p>
      </div>
    </div>
  );
}

function HomePage() {
  const handleToggle = () => {};
  const handleFetch = () => {};

  return (
    <div>

      <div className="row">
        <Toggle onChange={handleToggle} />
        <h5 className="toggletext">Make photos grayscale</h5>
        <button className="button" onClick={handleFetch}>
          Fetch New Photos
        </button>
      </div>

      <div className="grid-container">
        {photos.map((photo) => (
          <PhotoGrid
            key={photo.id}
            imageUrl={photo.imageUrl}
            title={photo.title}
            url={photo.url}
          />
        ))}
      </div>
      
    </div>
  );
}

export default HomePage;
