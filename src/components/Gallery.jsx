import PhotoCard from "./PhotoCard";

function Gallery() {
  return (
    <main className="container">
      <section className="gallery-grid">
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />
      </section>
    </main>
  );
}

export default Gallery;