import React from "react";
import ToggleButton from "../UI/ToggleButton/ToggleButton";
import Button from "../UI/Button/Button";

const Header = ({ grayscale, toggleGrayscale, handleFetchClick }) => {
  return (
    <>
      <h1 className="title">Photo Fetcher</h1>
      <header className="layout">
        <ToggleButton grayscale={grayscale} toggleGrayscale={toggleGrayscale} />
        <Button
          handleFetchClick={handleFetchClick}
          text={"Fetch New Photos"}
          className={"fetch-button"}
        />
      </header>
    </>
  );
};

export default Header;
