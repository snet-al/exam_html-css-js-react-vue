import React from "react";
import FetchPhotos from "./ui/FetchPhotosButton";
import SwitchContainer from "./ui/SwitchContainer";
import LoadMorePhotos from "./LoadMorePhotosButton";

function Header() {
  return (
    <header>
      Photo Gallery
      <section className="navbar">
        <SwitchContainer />
        <FetchPhotos />
      </section>
      <LoadMorePhotos />
    </header>
  );
}

export default Header;
