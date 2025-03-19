import React from 'react';
import Button from './UI/Button';
import Toggle from './UI/Toggle';
import Title from './UI/Title';

const Header = ({ onFetchNewPhotos, onToggleGrayscale }) => {
    return (
        <header>
            <Title title="Photo Fetcher" />
            <nav className="controls">
                <Toggle onChange={(e) => onToggleGrayscale(e.target.checked)} />
                <Button text="Fetch New Photos" className="new-photos" onClick={onFetchNewPhotos} />
            </nav>
        </header>
    );
};

export default Header;