import { useState } from "react";
import Toggle from "./components/UI/Toggle";
import Button from "./components/UI/Button";
import PhotoGrid from "./components/PhotoGrid";
import "./App.css";

const staticPhotos = [
  { id: "1", author: "Author 1", url: "https://picsum.photos/", download_url: "https://picsum.photos/seed/1/800/600" },
  { id: "2", author: "Author 2", url: "https://picsum.photos/", download_url: "https://picsum.photos/seed/2/800/600" },
  { id: "3", author: "Author 3", url: "https://picsum.photos/", download_url: "https://picsum.photos/seed/3/800/600" },
  { id: "4", author: "Author 4", url: "https://picsum.photos/", download_url: "https://picsum.photos/seed/4/800/600" },
];

export default function App() {
  const [grayscale, setGrayscale] = useState(false);

  return (
    <main className="page">
      <section className="container">
        <header className="header">
          <h1 className="title">Photo Fetcher</h1>

          <div className="controls">
            <Toggle
              label="Make photos grayscale"
              checked={grayscale}
              onChange={setGrayscale}
            />
            <Button onClick={() => {}}>Fetch New Photos</Button>
          </div>
        </header>

        <PhotoGrid photos={staticPhotos} grayscale={grayscale} />
      </section>
    </main>
  );
}
