import React from "react";
import "../index.css";
import Button from "../components/ui/Button";
import ImageGrid from "../components/ImageGrid";

const MorePhotos = () => {
  console.log("Loading more photos...");
};

function GalleryPage() {
  return (
    <>
      <ImageGrid />
      <Button
        className="btnn"
        buttonText="Load More Photos"
        onClick={MorePhotos}
      />
    </>
  );
}

export default GalleryPage;
