import { useEffect, useState } from "react";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Header from "./components/Header";
import { fetchFourPhotos } from "./services/photos";
import "./index.css";

export default function App() {
  const [photos, setPhotos] = useState([]);
  const [grayscaleOn, setGrayscaleOn] = useState(false);

  function handleToggle(e) {
    setGrayscaleOn(e.target.checked);
  }

  async function handleFetchNew() {
    const items = await fetchFourPhotos();
    setPhotos(items);
  }

  useEffect(() => {
    handleFetchNew();
  }, []);

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
