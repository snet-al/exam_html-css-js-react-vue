import PhotoGrid from './PhotoGrid.jsx';
import SkeletonLoader from './SkeletonLoader.jsx';

function PhotoGallery({ grayscale, photos, loading, count }) {
  return (
    <section className="photo-grid">
      <PhotoGrid grayscale={grayscale} photos={photos} />
      {loading && (<SkeletonLoader loading={loading} count={count} />)}
    </section>
  );
}

export default PhotoGallery;