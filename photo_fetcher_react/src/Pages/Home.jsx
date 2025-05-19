import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import '../css/app.css';
import Header from '../Components/Header.jsx';
import NavBar from '../Components/NavBar.jsx';
import PhotoGallery from '../Components/PhotoGallery.jsx';
import Footer from '../Components/Footer.jsx';

function Home() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [grayscale, setGrayscale] = useState(false);

  const FetchPhotos = async () => {
    setLoading(true);

    setImages(Array.from({ length: 4 }, () => ({ placeholder: true })));

    try {
      const response = await fetch(
        `https://picsum.photos/v2/list?page=${Math.floor(Math.random() * 100) + 1}&limit=4`
      );
      if (!response.ok) throw new Error(`Error Status: ${response.status}`);

      const photos = await response.json();

      setImages(photos);

    } catch (error) {
      console.error("Error fetching photos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    FetchPhotos();
  }, []);

  return (
    <>
      <Header />
      <NavBar setImages={setImages} setLoading={setLoading} loading={loading} grayscale={grayscale} setGrayscale={setGrayscale} />
      <PhotoGallery images={images} loading={loading} grayscale={grayscale} />
      <Footer setImages={setImages} setLoading={setLoading} loading={loading} />
    </>
  )
}

export default Home;
