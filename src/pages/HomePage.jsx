import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import NavBar from '../components/NavBar.jsx';
import PhotoGallery from '../components/PhotoGallery.jsx';
import Footer from '../components/Footer.jsx';
import '../css/app.css';
import { PicsumPhotos } from "../services/PicsumPhotos.js";

const limit = 4;

function HomePage() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [grayscale, setGrayscale] = useState(false);

  const loadPhotos = async (append) => {
    setLoading(true);
    const page = Math.floor(Math.random() * 100) + 1;
    try {
      const photos = await PicsumPhotos.getPhotos(page, limit);
      setImages(prev => append ? [...prev, ...photos] : photos);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPhotos(false);
  }, []);

  return (
    <>
      <NavBar loadPhotos={() => loadPhotos(false)} loading={loading} grayscale={grayscale} setGrayscale={setGrayscale} />
      <PhotoGallery images={images} grayscale={grayscale} />
      <Footer loadPhotos={() => loadPhotos(true)} loading={loading} />
    </>
  )
}

export default HomePage;
