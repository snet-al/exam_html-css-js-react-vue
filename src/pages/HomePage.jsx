import { useEffect, useState } from "react";
import Toggle from "../components/UI/Toggle";
import Button from "../components/UI/Button";
import PhotoGrid from "../components/PhotoGrid";
import { fetchRandomPhotos } from "../services/picsumService";

export default function HomePage() {
  const [photos, setPhotos] = useState([]);
  const [grayscale, setGrayscale] = useState(false);
  const [loading, setLoading] = useState(false);

  async function loadPhotos() {
    setLoading(true);

    try {
      const newPhotos = await fetchRandomPhotos(4);
      setPhotos(newPhotos);
    } catch (error) {
      console.error("Error fetching photos:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadPhotos();
  }, []);

  return (
    <>
      <header className="header">
        <h1 className="title">Photo Fetcher</h1>

        <div className="controls">
          <Toggle
            label="Make photos Grayscale"
            checked={grayscale}
            onChange={setGrayscale}
          />

          <Button onClick={loadPhotos} disabled={loading}>
            {loading ? "Loading..." : "Fetch New Photos"}
          </Button>
        </div>
      </header>

      <PhotoGrid photos={photos} grayscale={grayscale} />
    </>
  );
}