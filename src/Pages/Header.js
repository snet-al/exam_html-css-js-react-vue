import reducer, { initialState } from "../Context/Reducer";
import { useStateValue } from "../Context/StateProvider";
import "./Header.css";
import React from "react";

function Header() {
  const [{ isChecked }, dispatch] = useStateValue();

  const handleCheckboxChange = () => {
    dispatch({ type: "handle_checked" });
  };

  return (
    <header className="main_header">
      <p>Photo Fetcher</p>
      <nav className="navbar">
        <div className="switch_toogle">
          <label className="switch">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <span className="slider round"></span>
          </label>
        </div>
        <p>Make photos grayscale</p>
        <button className="newPhotos">Fetch New Photos</button>
      </nav>
    </header>
  );
}

export default Header;
