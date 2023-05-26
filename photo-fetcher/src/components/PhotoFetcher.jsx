import React, { useState } from 'react';
import "../components/photofetcher.css"

const PhotoFetcher = () => {
  const [photos, setPhotos] = useState([]);
  const [grayscale, setGrayscale] = useState(false);

 
  const fetchPhotos = () => {
    fetch('https://picsum.photos/v2/list?page=2&limit=12') 
      .then(response => response.json())
      .then(data => {
        const fetchedPhotos = data.map(photo => ({
          url: photo.download_url,
          author: photo.author,
          source: photo.url
        }));
        setPhotos(fetchedPhotos);
      })
      .catch(error => {
        console.error('Error fetching photos:', error);
      });
  };
  const toggleGrayscale = () => {
    setGrayscale(prevGrayscale => !prevGrayscale);
  };

  return (
    <div>
      <h1>Photo Fetcher</h1>
      <header className="buttons">
        <div className="toggle-button">
          <label className="switch">
            <input type="checkbox" checked={grayscale} onChange={toggleGrayscale} />
            <span className="slider round"></span>
          </label>
          <span className="text-paragraph">Make photos grayscale</span>
        </div>
        <button className="fetch-button" onClick={fetchPhotos}>
          Fetch New Photos
        </button>
      </header>
      <section className="grid-container">
        {photos.map((photo, index) => (
          <div className="image-container" key={index}>
            <figcaption className="line1">Lukas Budimaier</figcaption>
            <figcaption className="line2">https://unsplash.com/</figcaption>
            <img
              src={photo.url}
              alt={`Photo ${index + 1}`}
              style={{ filter: grayscale ? 'grayscale(100%)' : 'none' }}
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default PhotoFetcher;