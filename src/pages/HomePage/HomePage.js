import React, { useEffect, useState } from 'react';
import './HomePage.css';
import Header from '../../components/Header/Header';
import Photo from '../../components/Photo/Photo';
import { fetchPhotos } from '../../services/fetchPhotos';

function HomePage() {
  const [photos, setPhotos] = useState([]);
  const [isGrayscale, setIsGrayscale] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [limit, setLimit] = useState(4);

  useEffect(() => {
    fetchPhotos(pageNumber, limit)
      .then(data => {
        setPhotos(data);
      });
  }, [pageNumber]);

  const handleToggle = () => {
    setIsGrayscale(!isGrayscale);
  };

  const handleFetch = () => {
    setPageNumber(prevPageNumber => prevPageNumber + 1);
  };

  return (
    <div className={`main ${isGrayscale ? 'grayscale' : ''}`}>
      <Header handleToggle={handleToggle} handleFetch={handleFetch} />
      <section className="grid-container">
        {photos && photos.map(photo => (
          <Photo
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


