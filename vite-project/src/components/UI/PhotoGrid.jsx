import PhotoCard from "./PhotoCard";

export default function PhotoGrid({ photos, grayscale }) {
  return (
    <section className="grid" aria-label="Photos grid">
      {photos.map((p) => (
        <PhotoCard key={p.id} photo={p} grayscale={grayscale} />
      ))}
    </section>
  );
}
