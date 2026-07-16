import PhotoCard from "./PhotoCard";

function Gallery({ photos, grayscale }) {
  return (
    <main className="container">
      <section className="gallery-grid">
        {photos.map((item) => (
          <PhotoCard key={item.id} photo={item} grayscale={grayscale} />
        ))}
      </section>
    </main>
  );
}

export default Gallery;