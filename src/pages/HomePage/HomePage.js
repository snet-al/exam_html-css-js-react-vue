
import React, { useEffect, useState } from 'react';
import './HomePage.css';
import Header from '../../components/Header/Header';
import PhotoGrid from '../../components/PhotoGrid/PhotoGrid';

function HomePage() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = () => {
    const apiUrl = 'https://picsum.photos/v2/list?limit=4';

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setPhotos(data);
      })
      .catch(error => {
        console.error('Error fetching photos:', error);
      });
  };

  const handleToggle = () => {};

  const handleFetch = () => {
    fetchPhotos();
  };

  return (
    <div className="main">
      <Header handleToggle={handleToggle} handleFetch={handleFetch} />
      <section className="grid-container">
        {photos.map(photo => (
          <PhotoGrid
            key={photo.id}
            imageUrl={photo.download_url}
            title={photo.author}
            url={photo.url}
          />
        ))}
      </section>
    </div>
  );
}


export default HomePage;

