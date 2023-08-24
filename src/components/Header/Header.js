import React from "react";
import "../../App.css";
import ToggleSwitch from "../UI/ToggleSwitch/ToggleSwitch";
import LoadNewImagesButton from "../UI/LoadNewImagesButton/LoadNewImagesButton";
import Title from "../UI/Title/Title";


const Header = () => {
  return (
      <>
    <Title title="Photo Fetcher" />
      <section className="first-container">
          <ToggleSwitch/>
          <LoadNewImagesButton btnText="Fetch New Photos" />
      </section>
      </>
  );
};

export default Header;
