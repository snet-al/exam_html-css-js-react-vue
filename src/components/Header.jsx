import React from 'react';
import Button from './UI/Button';
import Toggle from './UI/Toggle';
import Title from './UI/Tittle';

const Header = ({ onFetchPhotos, onToggleGrayscale, isGrayscale, loading }) => {
    return (
        <header className="app-header">
            <Title title="Picaroo" />
            <nav className="header-controls">
                <Toggle 
                    onChange={onToggleGrayscale}
                    checked={isGrayscale}
                />
                <Button 
                    text={loading ? "Loading..." : "Get Fresh Photos"} 
                    className="fetch-btn" 
                    onClick={onFetchPhotos}
                    disabled={loading}
                />
            </nav>
        </header>
    );
};

export default Header;