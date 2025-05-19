import React from "react";
import '../../css/app.css';

function Button({ className = 'btn', onClick = () => { }, label = 'Button', disabled = false }) {
    return (
        <button className={className} onClick={onClick} disabled={disabled}> {label} </button>
    );
}

export default Button;