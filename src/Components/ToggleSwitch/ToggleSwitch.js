import React from "react";
import "../../App.css";

const ToggleSwitch = () => {
    return (
        <section>
            <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
            </label>
            <span className="toggle-text">Make photos grayscale</span>
        </section>
    );
};

export default ToggleSwitch;
