import React from "react";
import "../../App.css";
import ToggleSwitch from "../UI/ToggleSwitch/ToggleSwitch";
import Button from "../UI/Button/Button";
import Title from "../UI/Title/Title";

const Header = ({ fetchNewImages, onChangeToggle }) => {
  return (
    <>
      <Title title="Photo Fetcher" />
      <section className="first-container">
        <ToggleSwitch onChangeToggle={onChangeToggle} />
        <Button btnText="Fetch New Photos" onClick={fetchNewImages} />
      </section>
    </>
  );
};


export default Header;