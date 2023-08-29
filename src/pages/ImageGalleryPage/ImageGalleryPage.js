import React, { useState, useEffect } from "react";
import "../../App.css";
import ImageItem from "../../components/ImageItem/ImageItem";
import MainLayout from "../../layout/MainLayout/MainLayout";
import { fetchRandomImages } from "../../service/api/apiService";

const ImageGalleryPage = () => {
  const [imagesData, setImageData] = useState([]);
  const [isGrayscale, setIsGrayscale] = useState(false);

  useEffect(() => {
    fetchRandomImages(4)
      .then((data) => setImageData(data))
      .catch((error) => console.error("Error fetching images:", error));
  }, []);

  const fetchNewImages = () => {
    fetchRandomImages(4)
      .then((data) => setImageData(data))
      .catch((error) => console.error("Error fetching images:", error));
  };

  const handleToggle = (toggled) => {
    setIsGrayscale(toggled);
  };
  return (
    <MainLayout onChange={handleToggle} fetchNewImages={fetchNewImages}>
      <section className="container">
        {imagesData.map((data) => (
          <ImageItem key={data.id} data={data} isGrayscale={isGrayscale} />
        ))}
      </section>
    </MainLayout>
  );
};

export default ImageGalleryPage;
