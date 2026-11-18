import PhotoCard from './PhotoCard';

export default function PhotoGallery({ photos, isGrayscale }) {
  return (
    <section className="photo-gallery" aria-label="Photo gallery">
      {photos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} isGrayscale={isGrayscale} />
      ))}
    </section>
  );
}
