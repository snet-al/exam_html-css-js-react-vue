import React from "react";
import "./App.css";
import ImageContainer from "./components/ImageContainer/ImageContainer";
import Header from "./components/Header";
import Footer from "./components/Footer"


const images = [
  { id: 1, src: "https://picsum.photos/200", alt: "Photo 1" },
  { id: 2, src: "https://picsum.photos/201", alt: "Photo 2" },
  { id: 3, src: "https://picsum.photos/202", alt: "Photo 3" },
  { id: 4, src: "https://picsum.photos/203", alt: "Photo 4" },
];

function App() {
  return (
    <article className="container">
      <Header />
      <section className="image-grid">
        {images.map((image) => (
          <figure key={image.id}>
            <ImageContainer src={image.src} alt={image.alt} />
          </figure>
        ))}
      </section>
      <Footer />
    </article>
  );
}


export default App;