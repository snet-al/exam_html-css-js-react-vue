import React from "react";
import "./Navbar.css"

function Navbar() {
  return (
    <nav class="navbar">
      <div class="switch_toogle">
        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
      </div>
      <p>Make photos grayscale</p>
      <button class="newPhotos">Fetch New Photos</button>
    </nav>
  );
}

export default Navbar;
