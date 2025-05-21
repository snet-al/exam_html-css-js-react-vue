import React, { useEffect } from "react";
import { useState } from "react";
import '../css/app.css';

import NavBar from '../Components/NavBar.jsx';
import PhotoGallery from '../Components/PhotoGallery.jsx';
import Footer from '../Components/Footer.jsx';
import dummyData from "../Store/DummyData.jsx";

function Home() {
  const [images, setImages] = useState([]);
  const [grayscale, setGrayscale] = useState(false);

  function fetchRandomImages(numberOfImages, dummyData) {
    const randomImages = []
    let i = 0;
    while (i < numberOfImages) {
      randomImages[i] = dummyData[Math.floor(Math.random() * 12)];
      i += 1;
    }
    setImages(randomImages);
  }

  function fetchMoreImages(numberOfImages, dummyData) {
    const randomImages = []
    let i = 0;
    while (i < numberOfImages) {
      randomImages[i] = dummyData[Math.floor(Math.random() * 12)];
      i += 1;
    }
    setImages(prevImages => [...prevImages, ...randomImages]);
  }

  useEffect(() => {
    fetchRandomImages(4, dummyData);
  }, []);

  return (
    <>
      <NavBar fetchRandomNewImages={fetchRandomImages} dummyData={dummyData} grayscale={grayscale} setGrayscale={setGrayscale} />
      <PhotoGallery images={images} grayscale={grayscale} />
      <Footer fetchMoreImages={fetchMoreImages} dummyData={dummyData} />
    </>
  )
}

export default Home;
