import React from "react";
import Header from "./components/Header";
import "../index.css";
import Button from "./components/ui/Button";

// const handleLoadMorePhotos = () => {
//   console.log("Loading more photos...");
// };
function GalleryPages() {
  const handleLoadMorePhotos = () => {
    console.log("Loading more photos...");
  };
  return (
    <main>
      <Header />
      <Button
        className="load-more-button-container"
        buttonText="Load More Photos"
        onClick={handleLoadMorePhotos}
      />
    </main>
  );
}

export default GalleryPages;
