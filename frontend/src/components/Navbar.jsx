import { useContext } from "react";
import { GrayscaleContext } from "../App";

function Navbar() {
  const { isGrayscale, handleToggle } = useContext(GrayscaleContext);

  return (
    <nav>
      <div className="toggle-container">
        <input
          type="checkbox"
          id="grayscale"
          checked={isGrayscale}
          onChange={handleToggle}
        />
        <label htmlFor="grayscale" className="toggle">
          <span className="toggle-off">X</span>
        </label>
        <p>Make photos grayscale</p>
      </div>
      <button>Fetch New Photos</button>
    </nav>
  );
}

export default Navbar;
