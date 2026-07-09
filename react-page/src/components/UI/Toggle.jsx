function Toggle({ onChange }) {
    return (
        <div className="toggle-row">
            <label className="switch">
                <input type="checkbox" onChange={onChange} />
                <span className="slider"></span>
            </label>
            <span className="label-text">Make photos grayscale</span>
        </div>
    )
}

export default Toggle