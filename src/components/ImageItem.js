import React from "react";
import "../index.css";
import DummyData from "../store/DummyData";

function ImageItem() {
  console.log(DummyData);

  return (
    <section className="photo-grid">
      {DummyData.map((image, index) => (
        <figure className="photo" key={0}>
          <img src={image.url} alt={`Photo ${index + 1}`} />
          <figcaption>{image.caption}</figcaption>
        </figure>
      ))}
    </section>
  );
}

export default ImageItem;
