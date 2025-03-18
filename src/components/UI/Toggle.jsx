import React from "react";

const ToggleSwitch = () => {
    return (
        <div className="switch-container">
            <label className="switch">
                <input type="checkbox" className="input" />
                <span className="slider round"></span>
            </label>
            <span className="switch-label">Make Photos Grayscale</span>
        </div>
    );
};

export default ToggleSwitch;