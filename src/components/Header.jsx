import React from 'react';
import ToggleSwitch from './UI/ToggleSwitch';

const Header = ({ handleFetchPhotos, handleToggleGrayscale, isGrayscale, loading }) => {
    return (
        <header className="appHeader">
            <h1>Picaroo</h1>
            <nav className="headerControls">
                <ToggleSwitch 
                    onChange={handleToggleGrayscale}
                    checked={isGrayscale}
                />
                <button 
                    className="fetchBtn" 
                    onClick={handleFetchPhotos}
                    disabled={loading}
                >
                    {loading ? "Loading..." : "Get Fresh Photos"}
                </button>
            </nav>
        </header>
    );
};

export default Header;