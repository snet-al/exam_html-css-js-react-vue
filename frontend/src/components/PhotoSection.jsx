import { dummyData } from "../store/DummyData";
import { useContext } from "react";
import { GrayscaleContext } from "../App";

function PhotoSection() {
  const { isGrayscale } = useContext(GrayscaleContext);

  return (
    <section className="photos-section">
      <div className="photos">
        {dummyData.map((photo) => (
          <img
            key={photo.id}
            src={photo.image}
            alt={photo.title}
            className={isGrayscale ? "grayscale" : ""}
          />
        ))}
      </div>
      <button>More Photos</button>
    </section>
  );
}

export default PhotoSection;
