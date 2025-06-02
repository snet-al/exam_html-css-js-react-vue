export default function GrayscaleToggle({setGrayscale}){
    return(
                <div className="grayscale-toggle-group">
                    <label className="toggle-container">
                        <input type="checkbox"  id="grayscale-toggle" 
                         onChange={()=>{
                            setGrayscale(prevGrayscale=>!prevGrayscale)

                        }}
                        />
                        <span className="slider round"></span>
                    </label>
                    <p>Make photos grayscale</p>
                </div>

    )
}