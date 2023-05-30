import React from 'react';

const PhotoGrid = ({ photos, grayscale }) => {
  console.log(photos)
  return (
    <section className="grid-container">
      {photos.map((photo, index) => (
        <div className="image-container" key={index}>
          <figcaption className="line1">{photo.author}</figcaption>
          {/* <figcaption className="line2">{photo.source}</figcaption> */}
          <img
            src={photo.download_url}
            alt={`Photo ${index + 1}`}
            style={{ filter: grayscale ? 'grayscale(100%)' : 'none' }}
          />
        </div>
      ))}
    </section>
  );
};

export default PhotoGrid;
