import React from 'react';
import './Button.css';

function Button({ onClick }) {
  return (
    <button className="button" onClick={onClick}>
      Fetch New Photos
    </button>
  );
}

export default Button;
