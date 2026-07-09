import PhotoCard from "./PhotoCard";

function Gallery({photos}) {
  return (
    <div className="container">
      <section className="gallery-grid">
        {photos.map((item) => (
          <PhotoCard key={item.id} photo={item} />
        ))}
      </section>
    </div>
  );
}

export default Gallery;