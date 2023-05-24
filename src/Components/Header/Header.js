import "./Header.css";
import React from "react";
import ToggleButton from "../UI/ButtonToggle/ButtonToggle";
import FetchButton from "../UI/ButtonFetch/ButtonFetch";
import HeaderText from "../HeaderText/HeaderText";
function Header({ onCheckboxChange }) {
  return (
    <header className="main-header">
      <HeaderText />
      <hgroup className="menu-header">
        <ToggleButton onCheckboxChange={onCheckboxChange}  />
        <h4>Make photos grayscale</h4>
        <FetchButton />
      </hgroup>
    </header>
  );
}

export default Header;
