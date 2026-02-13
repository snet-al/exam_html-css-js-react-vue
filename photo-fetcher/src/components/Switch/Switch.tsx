// https://www.w3schools.com/howto/howto_css_switch.asp

import "./Switch.css"
import React from "react"

interface SwitchProps {
    onSwitch : React.Dispatch<React.SetStateAction<boolean>>
    checked? : boolean;
    text? : string
}

function Switch({onSwitch, checked, text} : SwitchProps) {

    return (
        <>
            <div className="switch-wrap">
                <label className="switch">
                    <input type="checkbox" checked={checked} onClick={() => onSwitch(c => !c)} />
                    <span className="slider round" />
                </label>
                <p>{text}</p>
            </div>
        </>
    )
}

export default Switch