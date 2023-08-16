import React from "react";
import Header from "./Header";
import "../App.css";
import image1 from "../image1.jpg";

const ImagePicker = () => {
  return (
    <div>
     <Header/>
      <div className="container">
        <div className="column">
          <img src={image1} alt="Image 1" />
          <div className="image-information">
            <p className="author-name">Lukas Budimaier</p>
            <a className="image-url" href="https://unsplash.com/photos/pwaaqfoMibl">
              https://unsplash.com/photos/pwaaqfoMibl
            </a>
          </div>
        </div>
        <div className="column">
          <img src={image1} alt="Image 1" />
          <div className="image-information">
            <p className="author-name">Lukas Budimaier</p>
            <a className="image-url" href="https://unsplash.com/photos/pwaaqfoMibl">
              https://unsplash.com/photos/pwaaqfoMibl
            </a>
          </div>
        </div>
        <div className="column">
          <img src={image1} alt="Image 1" />
          <div className="image-information">
            <p className="author-name">Lukas Budimaier</p>
            <a className="image-url" href="https://unsplash.com/photos/pwaaqfoMibl">
              https://unsplash.com/photos/pwaaqfoMibl
            </a>
          </div>
        </div>
        <div className="column">
          <img src={image1} alt="Image 1" />
          <div className="image-information">
            <p className="author-name">Lukas Budimaier</p>
            <a className="image-url" href="https://unsplash.com/photos/pwaaqfoMibl">
              https://unsplash.com/photos/pwaaqfoMibl
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagePicker;
