import React from 'react';
import './Header.css';
import Toggle from '../Toggle/Toggle.js';

function Header({ handleToggle, handleFetch }) {
  return (
      <div className="row">
        <Toggle onChange={handleToggle} />
        <h5 className="toggletext">Make photos grayscale</h5>
        <button className="button" onClick={handleFetch}>
          Fetch New Photos
        </button>
      </div>
  );
}

export default Header;
