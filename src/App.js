import React from "react";
import Header from "./components/Header";
import ImageItem from "./components/ImageItem";
import ButtonAction from "./components/ui/ButtonAction";
const handleLoadMorePhotos = () => {
  console.log("Loading more photos...");
};
function App() {
  return (
    <main>
      <Header />
      <ImageItem />
      <ButtonAction
        className="load-more-button-container"
        buttonText="Load More Photos"
        onClick={handleLoadMorePhotos}
      />
    </main>
  );
}

export default App;
