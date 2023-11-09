import React from "react";
import Button from "./ui/Button";
import ToggleSwitch from "./ui/ToggleSwitch";

function Header() {
  const FetchNewPhotos = () => {
    console.log("Fetching new photos...");
  };

  return (
    <header>
      Photo Gallery
      <section className="navbar">
        <ToggleSwitch />
        <Button onClick={FetchNewPhotos} buttonText="Fetch New Image" />
      </section>
    </header>
  );
}

export default Header;
