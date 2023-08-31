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
    (async function () {
      setIsLoading(true);
      try {
        const image = await fetchRandomImages(pageNumber);
        if (initial) {
          setImages(image);
        } else {
          setImages([...images, ...image]);
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    })();
  }, [pageNumber, initial]);


  const handleMorePhotosClick = async () => {
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
        <MainLayout onChangeToggle={handleToggleGrayscale} fetchNewImages={fetchNewImages} handleMorePhotosClick={handleMorePhotosClick} >
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

