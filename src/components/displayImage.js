import React from "react";
import "../index.css";

function DisplayImage(props) {
  const { images } = props;

  return (
    <section className="photo-grid">
      {images.map((image, index) => (
        <figure className="photo" key={index}>
          <img src={image.url} alt={`Photo ${index + 1}`} />
          <figcaption>{image.caption}</figcaption>
        </figure>
      ))}
    </section>
  );
}

export default DisplayImage;
