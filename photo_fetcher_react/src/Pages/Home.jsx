import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import NavBar from '../Components/NavBar.jsx';
import PhotoGallery from '../Components/PhotoGallery.jsx';
import Footer from '../Components/Footer.jsx';
import '../css/app.css';
import { PicsumPhotos } from "../Services/PicsumPhotos.js";

function Home() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [grayscale, setGrayscale] = useState(false);
  const limit = 4;

  const loadPhotos = async () => {
    setLoading(true);
    const page = Math.floor(Math.random() * 100) + 1;
    try {
      const photos = await PicsumPhotos.getPhotos(page, limit);
      setImages(photos);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const loadMore = async () => {
    setLoading(true);
    const page = Math.floor(Math.random() * 100) + 1;
    try {
      const newPhotos = await PicsumPhotos.getPhotos(page, limit);
      setImages(prev => [...prev, ...newPhotos]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadPhotos();
  }, []);

  return (
    <>
      <NavBar loadPhotos={loadPhotos} loading={loading} grayscale={grayscale} setGrayscale={setGrayscale} />
      <PhotoGallery images={images} grayscale={grayscale} />
      <Footer loadMore={loadMore} loading={loading} />
    </>
  )
}

export default Home;
