export default function Controls({ isGrayscale, onToggleGrayscale, onFetchPhotos }) {
  return (
    <section className="controls" aria-label="Photo controls">
      <label className="toggle-container">
        <input 
          type="checkbox" 
          checked={isGrayscale}
          onChange={(e) => onToggleGrayscale(e.target.checked)}
        />
        <span className="toggle-slider"></span>
        <span>Make photos grayscale</span>
      </label>

      <button type="button" className="fetch-button" onClick={onFetchPhotos}>
        Fetch New Photos
      </button>
    </section>
  );
}
