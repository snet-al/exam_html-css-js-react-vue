import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

const App = () => {
  const [photosArray, setPhotosArray] = useState([]);
  const [isGrayscale, setIsGrayscale] = useState(false);
  return (
    <>
      <Header
        photosArray={photosArray}
        setPhotosArray={setPhotosArray}
        setGrayscale={setIsGrayscale}
      />
      <div style={{ filter: isGrayscale ? "grayscale(100%)" : "none" }}>
        <Home photosArray={photosArray} setPhotosArray={setPhotosArray} />
      </div>
    </>
  );
};

export default App;
