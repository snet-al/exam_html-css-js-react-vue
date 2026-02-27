import { useState } from "react";
import { dummyData } from "../store/dummyData";
import Toggle from "../components/UI/Toggle";
import Button from "../components/UI/Button";
import PhotoGrid from "../components/PhotoGrid";

export default function HomePage() {
  const [grayscale, setGrayscale] = useState(false);

  return (
    <>
      <header className="header">
        <h1 className="title">Photo Fetcher</h1>
        <div className="controls">
          <Toggle label="Make photos grayscale" checked={grayscale} onChange={setGrayscale} />
          <Button onClick={() => {}}>Fetch New Photos</Button>
        </div>
      </header>

      <PhotoGrid photos={dummyData} grayscale={grayscale} />
    </>
  );
}