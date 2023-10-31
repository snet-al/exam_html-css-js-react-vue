import React from "react";
import FetchPhotos from "./ui/FetchPhotos";
import SwitchContainer from "./ui/SwitchContainer";
import LoadMorePhotos from "./LoadMorePhotos";

function Header() {
  return (
    <header>
      Photo Gallery
      <nav className="navbar">
        <SwitchContainer />
        <FetchPhotos />
      </nav>
      <LoadMorePhotos />
    </header>
  );
}

export default Header;
