function SkeletonLoader({ loading, count }) {
  if (!loading) {
    return null;
  }
  return (
    <>
      {[...Array(count)].map((_, i) => (
        <figure className="photo-card skeleton" key={i}>
          <div className="skeleton-img"></div>
          <figcaption>
            <p className="skeleton-text"></p>
            <p className="skeleton-text skeleton-url"></p>
          </figcaption>
        </figure>
      ))}
    </>
  );
}

export default SkeletonLoader;
