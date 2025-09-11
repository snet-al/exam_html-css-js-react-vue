import React from "react";

const ToggleSwitch = ({ onChange, checked = false }) => {
    return (
        <div className="toggleWrapper">
            <label className="toggleSwitch">
                <input 
                    type="checkbox" 
                    className="toggleInput" 
                    onChange={onChange}
                    checked={checked}
                />
                <span className="slider round"></span>
            </label>
            <span className="toggleText">Grayscale Mode</span>
        </div>
    );
};

export default ToggleSwitch;