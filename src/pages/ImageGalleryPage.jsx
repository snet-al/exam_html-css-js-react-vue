import React, { useState, useEffect } from "react";
import ImageItem from "../components/ImageItem";
import MainLayout from "../layout/MainLayout";
import { fetchImages } from "../services/fetchImage";

const ImageGalleryPage = () => {
  const [images, setImages] = useState([]);
  const [grayscale, setGrayscale] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [initial, setInitial] = useState(true);      

  useEffect(() => {
    fetchMore();
  }, [pageNumber, initial]);

  const fetchMore = async () => {
    try {
      const newImages = await fetchImages(pageNumber);      
      setImages((prevState) => (initial ? newImages : [...prevState, ...newImages]));
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  const imageHandler = async () => {   // + nje page
    setInitial(false);
    setPageNumber(pageNumber + 1);
  };

  const newImages = () => {        
    setInitial(true);
    setPageNumber(pageNumber + 1);
  };

  const handleToggleGrayscale = (toggled) => {
    setGrayscale(toggled);
  };

  return (
    <>
        <MainLayout
          onToggleHandler={handleToggleGrayscale}
          newImages={newImages}
          imageHandler={imageHandler}
        >
          <section className="container">
          {images.map((image) => (
      <ImageItem key={image.id} image={image} grayscale={grayscale} />
       ))}
    </section>
        </MainLayout>
    </>
  );
};
export default ImageGalleryPage;