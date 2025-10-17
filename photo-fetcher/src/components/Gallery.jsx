import Card from "./UI/Card";

export default function Gallery({ photos = [], grayscaleOn = false }) {
  return (
    <section className={`gallery-section ${grayscaleOn ? "is-grayscale" : ""}`}>
      <div className="grid">
        {photos.map((p) => (
          <Card key={p.id} src={p.src} name={p.name} link={p.link} />
        ))}
      </div>
    </section>
  );
}
