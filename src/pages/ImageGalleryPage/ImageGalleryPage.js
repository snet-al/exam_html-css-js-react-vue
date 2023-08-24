import React from "react";
import "../../App.css";
import ImageItem from "../../components/ImageItem/ImageItem";

const ImageGalleryPage = () => {
  return (
    <>
      <section className="second-container">
        <ImageItem/>
        <ImageItem/>
        <ImageItem/>
        <ImageItem/>
      </section>
    </>
  );
};

export default ImageGalleryPage;