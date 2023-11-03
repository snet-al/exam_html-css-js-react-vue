import React from "react";
import Header from "./components/Header";

import DisplayImage from "./components/ImageItem";
import FetchPhotos from "./components/ui/ButtonAction";

function App() {
  const handleLoadMorePhotos = () => {
    console.log("Loading more photos...");
  };

  return (
    <main>
      <Header />
      <DisplayImage images={images} />
      <FetchPhotos onClick={handleLoadMorePhotos} buttonText="LoadMorePhotos" />
    </main>
  );
}

export default App;
