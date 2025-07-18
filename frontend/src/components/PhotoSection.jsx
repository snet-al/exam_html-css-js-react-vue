import { dummyData } from "../store/DummyData";

function PhotoSection() {
  return (
    <section className="photos-section">
      <div className="photos">
        {dummyData.map((photo) => (
          <img key={photo.id} src={photo.image} alt={photo.title} />
        ))}
      </div>
      <button>More Photos</button>
    </section>
  );
}

export default PhotoSection;
