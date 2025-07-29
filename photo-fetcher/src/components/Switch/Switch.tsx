// https://www.w3schools.com/howto/howto_css_switch.asp

import "./Switch.css"

interface SwitchProps {
    onSwitch : () => void
    checked? : boolean;
    text? : string
}

function Switch({onSwitch, checked, text} : SwitchProps) {
    return (
        <>
            <div className="switch-wrap">
                <label className="switch">
                    <input type="checkbox" checked={checked} onChange={onSwitch} />
                    <span className="slider round" />
                </label>
                <p>{text}</p>
            </div>
        </>
    )
}

export default Switch