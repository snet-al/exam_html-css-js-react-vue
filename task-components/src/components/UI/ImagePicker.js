import React, { useState, useEffect } from "react";
import "../../App.css";
import Header from "./Header";
import {fetchRandomImages} from "../../service/apiService";
const ImagePicker = () => {
  const [imagesData, setImagesData] = useState([]);
  const [isGrayscale, setIsGrayscale] = useState(false);

  useEffect(() => {
    fetchImages();
  }, []);

  const handleToggleChange = (toggled) => {
    setIsGrayscale(toggled);
  };

  const fetchImages = async () => {
    try {
      const randomImages = await fetchRandomImages(4);
      setImagesData(randomImages);
    } catch (error) {
      console.error(error);
    }
  };

  const onFetchMoreClick = async () => {
    try {
      const randomImages = await fetchRandomImages(4);
      setImagesData(randomImages);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="app">
      <Header onChange={handleToggleChange} onFetchMoreClick={onFetchMoreClick} />
      <main className="container">
        {imagesData.map((image) => (
          <div className="column" key={image.id}>
            <img
              src={isGrayscale ? `${image.download_url}?grayscale` : image.download_url}
              alt={`Image by ${image.author}`}
            />
            <div className="image-information">
              <p className="author-name">{image.author}</p>
              <a className="image-url" href={image.url}>
                {image.url}
              </a>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default ImagePicker;

