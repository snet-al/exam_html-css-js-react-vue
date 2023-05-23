import "./Header.css";
import React from "react";
import ToggleButton from "../UI/toggleButton/ToggleButton";
import FetchButton from "../UI/fetchButton/ButtonFetch";
import HeaderText from "./HeaderText";
function Header() {
  return (
    <header className="main-header">
      <HeaderText />
      <hgroup className="menu-header">
        <ToggleButton />
        <h4>Make photos grayscale</h4>
        <FetchButton />
      </hgroup>
    </header>
  );
}

export default Header;
