import React from 'react';
import {useState, useEffect, useContext, createContext} from 'react';
import fetchPhoto from '../service/photoService';

const PhotoContext = createContext();

export const PhotoProvider = ({children}) => {
  const [photos, setPhotos] = useState([]);
  const [isGrayscale, setIsGrayscale] = useState(false);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleFetchNew = async () => {
    setLoading(true);
    const randomPage = Math.floor(Math.random() * 10) + 1;
    const data = await fetchPhoto(randomPage, 4);
    setPhotos(data);
    setPage(randomPage);
    setLoading(false);
  };

const handleLoadMore = async () => {
  setLoading(true);
  const nextPage = page + 1;
  const data = await fetchPhoto(nextPage, 4);
  setPhotos((prevPhotos) => [...prevPhotos, ...data]);
  setPage(nextPage);
  setLoading(false);
};

  useEffect(() => {
    handleFetchNew();
  }, []);

  return (
    <PhotoContext.Provider
        value={{
            photos,
            isGrayscale,
            setIsGrayscale,
            loading,
            handleFetchNew,
            handleLoadMore,
        }}
    >
        {children}
    </PhotoContext.Provider>
  );
}

export const usePhotoContext = () => useContext(PhotoContext);
