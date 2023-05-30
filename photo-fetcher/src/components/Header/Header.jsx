import React from 'react';
import ToggleButton from '../UI/ToggleButton/ToggleButton';
import FetchButton from '../UI/FetchButton/FetchButton';  
import "../../index.css"

const Header = ({ grayscale, toggleGrayscale, handleFetchClick }) => {
  return (
    <>
    <h1 className='title'>Photo Fetcher</h1>
    <header className="buttons">
      
      <ToggleButton grayscale={grayscale} toggleGrayscale={toggleGrayscale} />
      <FetchButton handleFetchClick={handleFetchClick} text={"Fetch New Photos"} />
    </header>
    </>
  );
};

export default Header;
