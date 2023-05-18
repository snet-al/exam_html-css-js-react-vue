import "./Header.css";
import React from "react";
import ToggleButton from "./toggleButton/ToggleButton";
import FetchButton from "./fetchButton/ButtonFetch";
function Header() {
  return (
    <header className="main_header">
      <p>Photo Fetcher</p>
      <nav className="navbar">
        <ToggleButton />
        <p>Make photos grayscale</p>
        <FetchButton />
      </nav>
    </header>
  );
}

export default Header;
