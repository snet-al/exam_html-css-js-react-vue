function Navbar() {
  return (
    <nav>
      <div className="toggle-container">
        <input type="checkbox" id="grayscale" />
        <label for="grayscale" className="toggle">
          <span className="toggle-off">X</span>
        </label>
        <p>Make photos grayscale</p>
      </div>
      <button>Fetch New Photos</button>
    </nav>
  );
}

export default Navbar;
