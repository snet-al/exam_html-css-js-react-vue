import React from 'react';
import ToggleSwitch from './UI/ToggleSwitch';

const Header = ({ handleFetchPhotos, handleToggleGrayscale, isGrayscale, loading }) => {
    return (
        <header className="app-header">
            <h1>Picaroo</h1>
            <nav className="header-controls">
                <ToggleSwitch 
                    onChange={handleToggleGrayscale}
                    checked={isGrayscale}
                />
                <button 
                    className="fetch-btn" 
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