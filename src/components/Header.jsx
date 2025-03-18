import React from 'react';
import Button from './UI/Button';
import Toggle from './UI/Toggle';
import Title from './UI/Tittle';

const Header = () => {
    return (
        <header>
            <Title title="Photo Fetcher" />
            <nav className="controls">
                <Toggle />
                <Button text="Fetch New Photos" className="new-photos" />
            </nav>
        </header>
    );
};

export default Header;