import React from "react";

const Toggle = (props) => {
    return (
        <div className="switch-container">
            <label className="switch">
                <input
                    type="checkbox"
                    className="input"
                    name="grayscale-toggle"
                    onChange={props.onChange} />
                <span className="slider round"></span>
            </label>
            <span className="switch-label">Make Photos Grayscale</span>
        </div>
    );
};

export default Toggle;