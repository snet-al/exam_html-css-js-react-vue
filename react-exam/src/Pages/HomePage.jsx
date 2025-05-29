import { useEffect, useState, useRef } from "react";
import MainLayout from "../Layout/MainLayout";
import "./HomePage.css";
import { PicsumAPI } from "../Services/PicsumAPI.jsx";
import { getRandomPhotos, preloadImages } from "../Services/HelperFunctions.jsx";
import ToolBar from "../Components/ToolBar.jsx";
import PhotoGallery from "../Components/PhotoGallery/PhotoGallery.jsx"

function HomePage() {

  const [isToggled, setIsToggled] = useState(false)
  const [allPhotos, setAllPhotos] = useState([])
  const [selectedPhotos, setSelectedPhotos ] = useState([])
  const [loading, setLoading] = useState(false);

  const preloadedPhotosRef = useRef([]);

  function handleToggle(){
    setIsToggled((prevtoggle) => !prevtoggle)
  }

  useEffect(() => {
    async function fetchAndPreloadPhotos() {
      setLoading(true);

      const pagePhotos = new PicsumAPI();
      const photos = await pagePhotos.fetchAllPhotos();
      setAllPhotos(photos);

      setSelectedPhotos(getRandomPhotos(photos, 4))
      setLoading(false);
    }

    fetchAndPreloadPhotos();
  }, []);

  useEffect(() => {
      if (selectedPhotos.length !== 0) {
        preloadedPhotosRef.current = preloadImages(getRandomPhotos(allPhotos, 4, selectedPhotos));
      }
  }, [selectedPhotos]);

  function handleFetchClick() {
    setSelectedPhotos([]);
    setLoading(true);
    
    setTimeout(() => {
      setSelectedPhotos(preloadedPhotosRef.current);
      setLoading(false);
    }, 100);
  }

  function handleLoadMoreClick() {
    if (allPhotos.length - selectedPhotos.length < 4) {
      alert("There are no more photos to load!");
      return;
    }
    setLoading(true);

    setTimeout(()=>{
      setSelectedPhotos(prevSelected => [...prevSelected, ...preloadedPhotosRef.current]);
      setLoading(false); 
    },130)
  }

  return (
    <MainLayout onLoadMore={handleLoadMoreClick}>

      <ToolBar onToggle={handleToggle} onFetch={handleFetchClick}/>

      <PhotoGallery
        grayscale={isToggled}
        photos={selectedPhotos}
        loading={loading}
        count={4}
      />

    </MainLayout>
  );
};

export default HomePage