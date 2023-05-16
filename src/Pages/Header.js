import "./Header.css";
import React from "react";

function Header() {
  return (
    <header class="main_header">
      <p>Photo Fetcher</p>
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
    </header>
  );
}

export default Header;
