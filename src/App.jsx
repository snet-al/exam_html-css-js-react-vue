import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";

const App = () => {
  const [photosArray, setPhotosArray] = useState([]);

  return (
    <>
      <Header photosArray={photosArray} setPhotosArray={setPhotosArray} />
      <Home photosArray={photosArray} setPhotosArray={setPhotosArray} />
    </>
  );
};

export default App;
