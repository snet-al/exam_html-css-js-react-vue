import React from 'react';
import './Header.css';
import Toggle from '../Toggle/Toggle';

function Header({ handleToggle, handleFetch }) {
  return (
    <div className="header">
        <h2>Foto Fetcher</h2>
      <div className="row">
        <Toggle onChange={handleToggle} />
        <h5 className="toggletext">Make photos grayscale</h5>
        <button className="button" onClick={handleFetch}>
          Fetch New Photos
        </button>
      </div>
    </div>
  );
}

export default Header;
