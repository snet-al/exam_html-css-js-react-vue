import PhotoCard from "./PhotoCard";
import dummyData from "../store/dummyData"; 

function Gallery() {
  return (
    <main className="container">
      <section className="gallery-grid">
        {dummyData.map((item) => (
          <PhotoCard key={item.id} photo={item} />
        ))}
      </section>
    </main>
  );
}

export default Gallery;