import { useEffect, useState } from "react";
import MainLayout from "../Layout/MainLayout";
import "./HomePage.css";
import getAPI from "../Services/DataApi.jsx";
import getRandomPhotos from "../Services/RandomPhotos.jsx";
import ToolBar from "../Components/ToolBar.jsx";
import PhotoGallery from "../Components/PhotoGallery/PhotoGallery.jsx";

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
      const photos = await getAPI();
      setAllPhotos(photos);

      const randomPhotos = await getRandomPhotos(photos,4);
      setSelectedPhotos(randomPhotos);
      setLoading(false)
    };
    fetchPhotos()
  }, []);
    
  async function handleFetchClick() {
    setSelectedPhotos([]);
    setLoading(true);

    setTimeout(async () => {
      const fetchedPhotos = await getRandomPhotos(allPhotos,4);
      setSelectedPhotos(fetchedPhotos);
      setLoading(false);
    }, 50); 
  }

  async function handleLoadMoreClick() {
    setLoading(true);
    setTimeout(async () => {
      const fetchedPhotos = await getRandomPhotos(allPhotos,4);
      setSelectedPhotos(prevFetch => [...prevFetch, ...fetchedPhotos]);
      setLoading(false);
    }, 130);
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