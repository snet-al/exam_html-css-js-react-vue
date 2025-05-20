import React, { useEffect } from "react";
import { useState } from "react";
import '../css/app.css';

import NavBar from '../Components/NavBar.jsx';
import PhotoGallery from '../Components/PhotoGallery.jsx';
import Footer from '../Components/Footer.jsx';
import Layout from "../Layouts/Layout.jsx";
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
    return randomImages;
  }

  useEffect(() => {
    setImages(fetchRandomImages(4, dummyData));
  }, []);

  return (
    <>
      <Layout>
        <NavBar setImages={setImages} grayscale={grayscale} setGrayscale={setGrayscale} />
        <PhotoGallery images={images} grayscale={grayscale} />
        <Footer setImages={setImages} />
      </Layout>
    </>
  )
}

export default Home;
