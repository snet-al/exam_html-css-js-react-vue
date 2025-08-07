import React from "react";

const ToggleSwitch = ({ onChange, checked = false }) => {
    return (
        <div className="toggle-wrapper">
            <label className="toggle-switch">
                <input 
                    type="checkbox" 
                    className="toggle-input" 
                    onChange={onChange}
                    checked={checked}
                />
                <span className="slider round"></span>
            </label>
            <span className="toggle-text">Grayscale Mode</span>
        </div>
    );
};

export default ToggleSwitch;