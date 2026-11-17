import React, { useState } from "react";
import Header from "../components/UI/Header";
import PhotoCard from "../components/UI/PhotoCard";
import SkeletonCard from "../components/UI/SkeletonCard";
import { usePhotoContext } from "../store/PhotoContext";

const HomePage = () => {
  const {
    photos,
    isGrayscale, 
    setIsGrayscale, 
    loading,
    handleFetchNew,
    handleLoadMore, 
    } = usePhotoContext();

  return (
    <>
      <Header
        isGrayscale={isGrayscale}
        setIsGrayscale={setIsGrayscale}
        FetchNew={handleFetchNew}
        LoadMore={handleLoadMore}
      />

      {loading && <SkeletonCard />}

      <section className="gallery">
        {photos.map((photo) => (
            <PhotoCard
                key={photo.id}
                imgSrc={photo.download_url}
                imgAlt={`Photo by ${photo.author}`}
                authorName={photo.author}
                authorLink={photo.url}
                isGrayscale={isGrayscale}
            />
        ))}
      </section>

      <div className="more-photos">
        <button 
            className="fetch-btn"
            onClick={handleLoadMore}
            disabled={loading}
        >
            {loading ? "Loading..." : "More Photos"}
        </button>
      </div>
    </>
  );
}

export default HomePage;