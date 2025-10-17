export default function Controls() {
  return (
    <section className="controls-section">
      <label className="toggle">
        <input type="checkbox" />
        <span className="switch"></span>
        Make photos grayscale
      </label>

      <button class="btn" type="button">
        Fetch New Photos
      </button>
    </section>
  );
}
