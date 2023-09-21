import React from "react";
import ImageItem from "../components/ImageItem";
import MainLayout from "../layout/MainLayout";
import { dummyData } from "../store/data";

const ImageGalleryPage = () => {
  const renderImageItems = () => {
    return dummyData.map((data) => (
      <ImageItem key={data.id} data={data} />
    ));
  };

  return (
    <MainLayout>
      <section className="image-container">
        {renderImageItems()}
      </section>
    </MainLayout>
  );
};

export default ImageGalleryPage;
