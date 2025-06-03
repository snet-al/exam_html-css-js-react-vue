import React from "react";
import './style.css'

const Header = () => {
  return (
    <header>
      <h2>Welcome</h2>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
