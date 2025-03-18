import React from "react";
import "./App.css";
import ImageContainer from "./components/ImageContainer/ImageContainer";
import ToggleSwitch from "./components/UI/Toggle/Toggle";
import FetchNewPhotosButton from "./components/UI/NewButton/NewPhotosButton";
import LoadMoreButton from "./components/UI/MoreButton/LoadMoreButton";

function App() {
  const images = [
    { id: 1, src: "https://picsum.photos/200", alt: "Photo 1" },
    { id: 2, src: "https://picsum.photos/201", alt: "Photo 2" },
    { id: 3, src: "https://picsum.photos/202", alt: "Photo 3" },
    { id: 4, src: "https://picsum.photos/203", alt: "Photo 4" },
  ];

  return (
    <div className="container">
      <h1 className="title">Photo Fetcher</h1>
      <div className="controls">
        <ToggleSwitch />
        <FetchNewPhotosButton />
      </div>
      <div className="image-grid">
        {images.map((image) => (
          <ImageContainer key={image.id} src={image.src} alt={image.alt} />
        ))}
      </div>
      <LoadMoreButton />
    </div>
  );
}

export default App;