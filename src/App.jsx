import React, { useState } from "react";
import "./App.css";
import ImageContainer from "./components/ImageContainer/ImageContainer";
import Header from "./components/Header";
import Footer from "./components/Footer";

const photoData = [
  { id: 1, src: "https://picsum.photos/300/250", alt: "Random Photo 1" },
  { id: 2, src: "https://picsum.photos/301/250", alt: "Random Photo 2" },
  { id: 3, src: "https://picsum.photos/302/250", alt: "Random Photo 3" },
  { id: 4, src: "https://picsum.photos/303/250", alt: "Random Photo 4" },
];

function App() {
  const [images] = useState(photoData);

  return (
    <main className="container">
      <Header />
      <section className="image-grid">
        {images.map((photo) => (
          <div key={photo.id}>
            <ImageContainer src={photo.src} alt={photo.alt} />
          </div>
        ))}
      </section>
      <Footer />
    </main>
  );
}

export default App;