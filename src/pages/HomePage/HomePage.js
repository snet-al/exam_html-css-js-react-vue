
import React from 'react';
import './HomePage.css';
import { photos } from '../../store/dummyData';
import Header from '../../components/Header/Header';
import PhotoGrid from '../../components/PhotoGrid/PhotoGrid';

function HomePage() {
  const handleToggle = () => {};
  const handleFetch = () => {};

  return (
    <div className="main">
      <Header handleToggle={handleToggle} handleFetch={handleFetch} />
      <section className="grid-container">
         {photos.map((photo) => (
           <PhotoGrid
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

