import React from 'react';
import Button from './UI/Button';
import Toggle from './UI/Toggle';
import Title from './UI/Tittle';

const Header = () => {
    return (
        <header className="app-header">
            <Title title="Picaroo" />
            <nav className="header-controls">
                <Toggle />
                <Button text="Get Fresh Photos" className="fetch-btn" />
            </nav>
        </header>
    );
};

export default Header;