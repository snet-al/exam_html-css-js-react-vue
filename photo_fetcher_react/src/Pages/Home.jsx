import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { fetchPhotos } from "../Services/Api.js";
import NavBar from '../Components/NavBar.jsx';
import PhotoGallery from '../Components/PhotoGallery.jsx';
import Footer from '../Components/Footer.jsx';
import Layout from "../Layouts/Layout.jsx";
import '../css/app.css';

function Home() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [grayscale, setGrayscale] = useState(false);

  useEffect(() => {
    fetchPhotos(4, setImages, setLoading);
  }, []);

  return (
    <>
      <Layout>
        <NavBar setImages={setImages} setLoading={setLoading} loading={loading} grayscale={grayscale} setGrayscale={setGrayscale} />
        <PhotoGallery images={images} loading={loading} grayscale={grayscale} />
        <Footer setImages={setImages} setLoading={setLoading} loading={loading} />
      </Layout>
    </>
  )
}

export default Home;
