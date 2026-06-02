import Gallery from "../components/Gallery";
import MainLayout from "../layout/MainLayout";
import "../App.css";
import { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { fetchPhotosFromApi } from "../services/photoService";

function Home() {
    const [displayedPhotos, setDisplayedPhotos] = useState([]);
  const [grayscale, setGrayscale] = useState(() => {
    return localStorage.getItem("grayscale") === "true";
  });
  
  const poolPhotos = useRef([]);
  const pageRef = useRef(1);
  const photosPerLoad = 4;

    const getRandomPhotos = async (count) => {
    const selected = [];
    let currentPool = [...poolPhotos.current];

    while (selected.length < count) {
      if (currentPool.length === 0) {
        pageRef.current += 1;
        const newData = await fetchPhotosFromApi(pageRef.current, 100);
        currentPool = currentPool.concat(newData);
      }

      const randomIndex = Math.floor(Math.random() * currentPool.length);
      const chosenPhoto = currentPool.splice(randomIndex, 1)[0];
      if (chosenPhoto) {
        selected.push(chosenPhoto);
      }
    }
    poolPhotos.current = currentPool;
    return selected;
  };

  const handleFetchPhotos = async () => {
    setDisplayedPhotos([]); 
    pageRef.current = 1;    
    poolPhotos.current = []; 

    const data = await fetchPhotosFromApi(pageRef.current, 100);
    poolPhotos.current = data;

    const initialFour = await getRandomPhotos(photosPerLoad);
    setDisplayedPhotos(initialFour);
  };

  useEffect(() => {
    handleFetchPhotos();
  }, []);

  const handleLoadMore = async () => {
    const newPhotos = await getRandomPhotos(photosPerLoad);
    setDisplayedPhotos((prev) => prev.concat(newPhotos));
  };

  const handleToggleGrayscale = () => {
    setGrayscale((prev) => {
      const nextValue = !prev;
      localStorage.setItem("grayscale", nextValue); 
      return nextValue;
    });
  
  }
  return (
    <MainLayout>
      <Header 
        onFetchNew={handleFetchPhotos} 
        grayscale={grayscale} 
        onToggle={handleToggleGrayscale} 
      />
      
      <Gallery photos={displayedPhotos} grayscale={grayscale} />
      
      <Footer onLoadMore={handleLoadMore} />
    </MainLayout>
  );
}

export default Home;
