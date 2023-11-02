import React from "react";
import FetchPhotos from "./ui/ButtonAction";
import SwitchContainer from "./ui/SwitchContainer";

function Header() {
  const handleFetchNewPhotos = () => {
    console.log("Fetching new photos...");
  };
  return (
    <header>
      Photo Gallery
      <section className="navbar">
        <SwitchContainer />
        <FetchPhotos
          onClick={handleFetchNewPhotos}
          buttonText="Fetch New Image"
        />
      </section>
    </header>
  );
}

export default Header;
