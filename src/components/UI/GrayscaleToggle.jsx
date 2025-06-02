export default function GrayscaleToggle(){
    return(
                <div className="grayscale-toggle-group">
                    <label className="toggle-container">
                        <input type="checkbox"  id="grayscale-toggle"/>
                        <span className="slider round"></span>
                    </label>
                    <p>Make photos grayscale</p>
                </div>

    )
}