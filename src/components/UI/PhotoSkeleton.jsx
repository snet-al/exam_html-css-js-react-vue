
import "./PhotoSkeleton.css";

export default function PhotoSkeleton({ count = 4 }) {
  return (
    <div className="skeleton-grid">
      {Array(count).fill(0).map((_, i) => (
        <div key={i} className="skeleton-card">
          <div className="skeleton-image" />
          <div className="skeleton-line short" />
          <div className="skeleton-line long" />
        </div>
      ))}
    </div>
  );
}
