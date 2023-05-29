import React, { useEffect, useState } from 'react';
import PublicLayout from '../../layouts/PublicLayout/PublicLayout';
// import '../../pages/Homepage/Homepage.css'
import PhotoGrid from '../../components/PhotoGrid/PhotoGrid';
// import "../../index.css"

const HomePage = () => {
  const [photos, setPhotos] = useState([]);
  const [grayscale, setGrayscale] = useState(false);
  

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = () => {
    setPhotos([]);
    fetch('https://picsum.photos/v2/list?page=2&limit=4')
      .then(response => response.json())
      .then(data => {
        const fetchedPhotos = data.map(photo => ({
          url: photo.download_url,
          author: photo.author,
          source: photo.url
        }));
        setPhotos(fetchedPhotos);
      })
      .catch(error => {
        console.error('Error fetching photos:', error);
      });
  };

  const toggleGrayscale = () => {
    setGrayscale(prevGrayscale => !prevGrayscale);
  };

  const handleFetchClick = () => {
    fetchPhotos();
    console.log("jj")
  }

  return (
    <PublicLayout toggleGrayscale={toggleGrayscale} handleFetchClick={handleFetchClick}>
      <div>    
        <PhotoGrid photos= {photos} grayscale={grayscale} />
      </div>
    </PublicLayout>
  );
};

export default HomePage;
