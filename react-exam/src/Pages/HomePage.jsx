import { useEffect, useState } from "react";
import MainLayout from "../Layout/MainLayout";
import "./HomePage.css";
import { PicsumAPI } from "../Services/PicsumAPI.jsx";
import getRandomPhotos from "../Services/RandomPhotos.jsx";
import ToolBar from "../Components/ToolBar.jsx";
import PhotoGallery from "../Components/PhotoGallery/PhotoGallery.jsx"

function HomePage() {

  const [isToggled, setIsToggled] = useState(false)
  const [allPhotos, setAllPhotos] = useState([])
  const [selectedPhotos, setSelectedPhotos ] = useState([])
  const [loading, setLoading] = useState(false);

  function handleToggle(){
    setIsToggled((prevtoggle) => !prevtoggle)
  }
  
  useEffect(() => {
    async function fetchPhotos() {
      setLoading(true)
      const pagePhotos = new PicsumAPI();
      const photos = await pagePhotos.fetchPagePhotos();
      setAllPhotos(photos);

      const randomPhotos = getRandomPhotos(photos,4);
      setSelectedPhotos(randomPhotos);
      setLoading(false)
    };
    fetchPhotos()
  }, []);
    
  async function handleFetchClick() {
    setSelectedPhotos([]);
    setLoading(true);
    const fetchedPhotos = getRandomPhotos(allPhotos,4);
    setSelectedPhotos(fetchedPhotos);
    setLoading(false);

  }

  async function handleLoadMoreClick() {
    if ((allPhotos.length - selectedPhotos.length) >= 4) {
      setLoading(true);
    } else {
      setLoading(false);
      alert("There is no more photos to load!")
      return;
    }
    const fetchedPhotos = getRandomPhotos(allPhotos,4,selectedPhotos);
    setSelectedPhotos(prevFetch => [...prevFetch, ...fetchedPhotos]);
    setLoading(false);
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