import React, { useEffect, useState } from "react";
import DefaultLayout from "../../layouts/DefaultLayout/DefaultLayout";
import Photo from "../../components/Photo/Photo";
import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";
import Button from "../../components/UI/Button/Button";
import { fetchPhotos } from "../../photoservice/photoservice";

const HomePage = () => {
  const [photos, setPhotos] = useState([]);
  const [grayscale, setGrayscale] = useState(false);
  const [pageNumber, setPageNumber] = useState(50);
  const [initial, setInitial] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async function () {
      setIsLoading(true);
      let data = await fetchPhotos(pageNumber);
      console.log(data);
      if (initial) {
        setPhotos(data);
      } else {
        setPhotos([...photos, ...data]);
      }
      setIsLoading(false);
    })();
  }, [pageNumber, initial]);

  const toggleGrayscale = () => {
    setGrayscale((prevGrayscale) => !prevGrayscale);
  };

  const handleFetchClick = async () => {
    setInitial(true);
    setPageNumber(pageNumber + 1);
  };
  const handleMorePhotosClick = async () => {
    setInitial(false);
    setPageNumber(pageNumber + 1);
  };

  return (
    <DefaultLayout
      toggleGrayscale={toggleGrayscale}
      handleFetchClick={handleFetchClick}
    >
      <div>
        {isLoading ? (
          <LoadingIndicator />
        ) : (
          <>
            <section className="grid-container">
              {photos.map((photo, index) => (
                <div className="image-container" key={index}>
                  <figcaption className="line1">{photo.author}</figcaption>
                  <Photo
                    src={photo.download_url}
                    alt={`Photo ${index + 1}`}
                    style={{ filter: grayscale ? "grayscale(100%)" : "none" }}
                  />
                </div>
              ))}
            </section>
            <div className="layout">
              <Button
                text={"More Photos"}
                handleFetchClick={handleMorePhotosClick}
                className={"more-photos-button"}
              />
            </div>
          </>
        )}
      </div>
    </DefaultLayout>
  );
};

export default HomePage;
