import React, { useEffect, useState } from 'react';
import DefaultLayout from '../../layouts/DefaultLayout/DefaultLayout';
import PhotoGrid from '../../components/PhotoGrid/PhotoGrid';
import MorePhotosButton from '../../components/UI/MorePhotosButton/MorePhotosButton';
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator';

const HomePage = () => {
  const [photos, setPhotos] = useState([]);
  const [grayscale, setGrayscale] = useState(false);
  const [pageNumber, setPageNumber] = useState(50);
  const [photoLimit, setPhotoLimit] = useState(4);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = () => {
    console.log(photoLimit)
    setIsLoading(true);
    fetch(`https://picsum.photos/v2/list?page=${pageNumber}&limit=${4}`)
      .then(response => response.json())
      .then(data => {
        if(photoLimit === 4){
          setPhotos(data)
        }
        else
        setPhotos(prevValues =>(
         [
            ...prevValues,...data
          ]
          )
      );
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching photos:', error);
      });
  };

  const toggleGrayscale = () => {
    setGrayscale(prevGrayscale => !prevGrayscale);
  };

  const handleFetchClick = () => {
    setPhotoLimit(4);
    fetchPhotos();
    setPageNumber(pageNumber + 1)
  }
  const handleMorePhotosClick=()=> {
    setPhotoLimit(photoLimit + 4)
    fetchPhotos();
    setPageNumber(pageNumber + 1)
  }
  
  return (
    <DefaultLayout toggleGrayscale={toggleGrayscale} handleFetchClick={handleFetchClick}>
      <div>  
        {isLoading ? (<LoadingIndicator />) : (
          <>
          <PhotoGrid photos= {photos} grayscale={grayscale} />
          <MorePhotosButton text={"More Photos"} handleMorePhotosClick={handleMorePhotosClick}/>
          </>
        )}  
      </div>
    </DefaultLayout>
  );
};

export default HomePage;
