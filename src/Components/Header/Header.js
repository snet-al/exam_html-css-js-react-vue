import "./Header.css";
import React from "react";
import ToggleButton from "../UI/ButtonToggle/ButtonToggle";
import SpecialButton from "../UI/ButtonSpecial/ButtonSpecial";
import HeaderText from "../HeaderText/HeaderText";
function Header() {
  return (
    <header className="main-header">
      <HeaderText />
      <hgroup className="menu-header">
        <ToggleButton   />
        <h4>Make photos grayscale</h4>
        <SpecialButton buttonText={"Fetch New Photos"} />
      </hgroup>
    </header>
  );
}

export default Header;
