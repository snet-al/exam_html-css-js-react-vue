import React from "react";
const PhotoGrid = React.memo(function PhotoGrid({ grayscale, photos }) {
  return (
    <>
      {photos.map((photo) => (
        <figure className="photo-card" key={photo.id}>
          <img
            src= {photo.download_url}
            alt="Random photo"
            style={{ filter: grayscale ? "grayscale(100%)" : "none" }}
          />
          <figcaption>
            <p>{photo.author}</p>
            <a href={photo.url}>{photo.url}</a>
          </figcaption>
        </figure>
      ))}
    </>
  );
});

export default PhotoGrid;
