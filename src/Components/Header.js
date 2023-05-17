import "./Header.css";
import React from "react";
import Button_Fetch from "./Button_Fetch";
import Toggle from "./Toggle";

function Header() {
  return (
    <header className="main_header">
      <p>Photo Fetcher</p>
      <nav className="navbar">
        <Toggle />
        <p>Make photos grayscale</p>
        <Button_Fetch />
      </nav>
    </header>
  );
}

export default Header;
