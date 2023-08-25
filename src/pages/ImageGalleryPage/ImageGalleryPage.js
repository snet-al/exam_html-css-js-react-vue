import React from "react";
import "../../App.css";
import ImageItem from "../../components/ImageItem/ImageItem";
import MainLayout from "../../layout/MainLayout/MainLayout";
const ImageGalleryPage = () => {
  return (
    <MainLayout>
      <section className="second-container">
        <ImageItem/>
        <ImageItem/>
        <ImageItem/>
        <ImageItem/>
      </section>
    </MainLayout>
  );
};

export default ImageGalleryPage;