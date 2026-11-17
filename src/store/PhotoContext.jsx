import React from 'react';
import {useState, useEffect, useContext, createContext} from 'react';
import dummyData from "./dummyData";

const PhotoContext = createContext();

export const PhotoProvider = ({children}) => {
  const [photos, setPhotos] = useState([]);
  const [isGrayscale, setIsGrayscale] = useState(false);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleFetchNew = () => {
    setLoading(true);
    const randomPage = Math.floor(Math.random() * 10) + 1;
    const shuffled = [...dummyData].sort(() => 0.5 - Math.random());
    setPhotos(shuffled.slice(0, 4));
    setPage(randomPage);
    setLoading(false);
  };

const handleLoadMore = () => {
  setLoading(true);
  const nextPage = page + 1;
  const morePhotos = dummyData.slice(0, 4).map((photo, index) => ({
    ...photo,
    id: `${photo.id} - ${photos.length + index}`,
  }))
  setPhotos((prevPhotos) => [...prevPhotos, ...morePhotos]);
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
