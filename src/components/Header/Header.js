import React from "react";
import "../../App.css";
import ToggleSwitch from "../UI/ToggleSwitch/ToggleSwitch";
import ImageButton from "../UI/ImageButton/ImageButton";
import HeaderTitle from "../HeaderTitle/HeaderTitle";


const Header = () => {
  return (
      <>
      <HeaderTitle/>
      <section className="first-container">
          <ToggleSwitch/>
          <ImageButton/>
      </section>
      </>
  );
};

export default Header;
