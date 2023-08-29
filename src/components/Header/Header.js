import React from "react";
import "../../App.css";
import ToggleSwitch from "../UI/ToggleSwitch/ToggleSwitch";
import Button from "../UI/Button/Button";
import Title from "../UI/Title/Title";

const Header = ({ fetchNewImages, onChange }) => {
  return (
    <>
      <Title title="Photo Fetcher" />
      <section className="first-container">
        <ToggleSwitch onChange={onChange} />
        <Button btnText="Fetch New Photos" onClick={fetchNewImages} />
      </section>
    </>
  );
};


export default Header;
