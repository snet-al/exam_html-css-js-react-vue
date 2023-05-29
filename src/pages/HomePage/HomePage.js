import React, { useEffect, useState } from 'react';
import './HomePage.css';
import Header from '../../components/Header/Header';
import PhotoGrid from '../../components/PhotoGrid/PhotoGrid';

function HomePage() {
  const [photos, setPhotos] = useState([]);
  const [isGrayscale, setIsGrayscale] = useState(false);

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

  const handleToggle = () => {
    setIsGrayscale(!isGrayscale);
  };

  const handleFetch = () => {
    fetchPhotos();
  };

  return (
    <div className={`main ${isGrayscale ? 'grayscale' : ''}`}>
      <Header handleToggle={handleToggle} handleFetch={handleFetch} />
      <section className="grid-container">
        {photos.map(photo => (
          <PhotoGrid
            key={photo.id}
            imageUrl={photo.download_url}
            title={photo.author}
            url={photo.url}
            isGrayscale={isGrayscale}
          />
        ))}
      </section>
    </div>
  );
}

export default HomePage;



