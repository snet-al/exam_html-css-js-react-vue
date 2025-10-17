import { useState } from "react";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Header from "./components/Header";
import { dummyData } from "./store/dummyData";
import "./index.css";

export default function App() {
  const [photos, setPhotos] = useState(dummyData);
  const [grayscaleOn, setGrayscaleOn] = useState(false);

  function handleToggle(e) {
    setGrayscaleOn(e.target.checked);
  }

  function handleFetchNew() {
    const next = [...dummyData].sort(() => Math.random() - 0.5);
    setPhotos(next);
  }

  return (
    <Layout
      header={
        <Header
          grayscaleOn={grayscaleOn}
          onToggle={handleToggle}
          onFetch={handleFetchNew}
        />
      }
    >
      <Home photos={photos} grayscaleOn={grayscaleOn} />
    </Layout>
  );
}
