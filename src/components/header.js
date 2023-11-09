import React from "react";
import Button from "./ui/Button";
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
        <Button onClick={handleFetchNewPhotos} buttonText="Fetch New Image" />
      </section>
    </header>
  );
}

export default Header;
