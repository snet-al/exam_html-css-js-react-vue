import React from "react";
import FetchPhotos from "./FetchPhotos";
import SwitchContainer from "./SwitchContainer";
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
