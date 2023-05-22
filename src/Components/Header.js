import "./Header.css";
import React from "react";
import ToggleButton from "./UI/toggleButton/ToggleButton";
import FetchButton from "./UI/fetchButton/ButtonFetch";
function Header() {
  return (
    <header className="main-header">
      <h1>Photo Fetcher</h1>
      <hgroup className="menu-header">
        <ToggleButton />
        <p>Make photos grayscale</p>
        <FetchButton />
      </hgroup>
    </header>
  );
}

export default Header;
