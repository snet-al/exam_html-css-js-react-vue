import React from "react";
import "../index.css";
import DummyData from "../store/DummyData";
import ImageCard from "./ImageCard";

function ImageGrid() {
  console.log(DummyData);

  return (
    <section className="photo-grid">
      {DummyData.map((image, index) => (
        <ImageCard image={image} index={index} />
      ))}
    </section>
  );
}

export default ImageGrid;
