import React from "react";
import ButtonAction from "./ui/ButtonAction";
import ToggleSwitch from "./ui/ToggleSwitch";

function Header() {
  const handleFetchNewPhotos = () => {
    console.log("Fetching new photos...");
  };
  return (
    <header>
      Photo Gallery
      <section className="navbar">
        <ToggleSwitch />
        <ButtonAction
          onClick={handleFetchNewPhotos}
          buttonText="Fetch New Image"
        />
      </section>
    </header>
  );
}

export default Header;
