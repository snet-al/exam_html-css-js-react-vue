import React from "react";
import "./Toggle.css"

const ToggleSwitch = () => {
    return (
        <article className="switch-container">
            <label className="switch">
                <input type="checkbox" className="input" />
                <span className="slider round"></span>
            </label>
            <span className="switch-label">Make Photos Grayscale</span>
        </article>
    );
};

export default ToggleSwitch;