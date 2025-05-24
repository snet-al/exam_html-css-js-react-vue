function GrayscaleToggle({onToggle}){
    return(
    <label className="switch">
        <input
        type="checkbox"
        className="js-grayscaleToggle"
        onClick = {onToggle}
        />
        <span className="slider">X</span>
    </label>
    );
}

export default GrayscaleToggle