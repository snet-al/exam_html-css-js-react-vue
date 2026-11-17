import React from "react";

const Header = (props) => {
    return (
        <header className="app-header">
            <div className="toggle-container">
                <label className="switch">
                    <input type="checkbox" id="grayscale" checked={props.isGrayscale}
                    onChange={(e) => props.setIsGrayscale(e.target.checked)}
                    />
                    <span className="slider"></span>
                </label>
                <span>Make photos grayscale</span>
            </div>
            <button className="fetch-btn" onClick={props.FetchNew}>Fetch New Photos</button>
        </header>
    );
};

export default Header;