function Toggle(props){
    return(
    <>
        <label className='switch'>
            <input
            type='checkbox'
            className={props.inputClass}
            onClick = {props.onClick}
            />
            <span className="slider">✕</span>
        </label>
        <span>{props.spanText}</span>
    </>
    );
}

export default Toggle