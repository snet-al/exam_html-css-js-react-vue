import React, { useState, useEffect } from "react";
import "../../App.css";
import ImageItem from "../../components/ImageItem/ImageItem";
import MainLayout from "../../layout/MainLayout/MainLayout";
import { fetchRandomImages } from "../../service/imageService";
import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";

const ImageGalleryPage = () => {
  const [images, setImages] = useState([]);
  const [isGrayscale, setIsGrayscale] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [initial, setInitial] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchMoreImages();
  }, [pageNumber, initial]);

  const fetchMoreImages = async () => {
    setIsLoading(true);
    try {
      const newImages = await fetchRandomImages(pageNumber);
      setImages((prevState) => (initial ? newImages : [...prevState, ...newImages]));
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  const morePhotosHandler = async () => {
    setInitial(false);
    setPageNumber(pageNumber + 1);
  };

  const fetchNewImages = () => {
    setInitial(true);
    setPageNumber(pageNumber + 1);
  };

  const handleToggleGrayscale = (toggled) => {
    setIsGrayscale(toggled);
  };

  return (
    <>
      {isLoading ? (
        <LoadingIndicator/>
      ) : (
        <MainLayout onToggleHandler={handleToggleGrayscale} fetchNewImages={fetchNewImages} morePhotosHandler={morePhotosHandler} >
          <section className="container">
            {images.map((image) => (
              <ImageItem key={image.id} image={image} isGrayscale={isGrayscale} />
            ))}
          </section>
        </MainLayout>
      )}
    </>
  );
};
export default ImageGalleryPage;

