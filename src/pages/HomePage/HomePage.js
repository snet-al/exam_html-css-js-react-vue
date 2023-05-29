import React, { useState } from 'react';
import './HomePage.css';
import { photos } from '../../store/dummyData';
import Photo from '../../components/Photo/Photo';

function HomePage() {
  const [images, setImages] = useState(photos);

  return (
    <div className="main">
      <section className="grid-container">
        {images.map((photo) => (
          <Photo
            key={photo.id}
            imageUrl={photo.imageUrl}
            title={photo.title}
            url={photo.url}
          />
        ))}
      </section>
    </div>
  );
}

export default HomePage;
