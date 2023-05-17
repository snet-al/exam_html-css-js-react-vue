import "./Header.css";
import React from "react";
import Button_Fetch from "./Components/Button_Fetch/Button_Fetch";
import Toggle from "./Components/Toggle/Toggle";

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
