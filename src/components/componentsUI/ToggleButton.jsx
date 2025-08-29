import './ToggleButton.css'

export function ToggleButton({isGrey, setIsGrey}) {
  function turnGreyscale(){
    setIsGrey(!isGrey);
  }

  return (
    <div className="toggle-button" >
      <input type="checkbox" id="check" className="toggle" 
      checked={isGrey} onChange={turnGreyscale}/>
      <label htmlFor="check">
        <span className="toggle-button-text">Make photos greyscale</span>
        <span className="checkbox-symbol"></span>
      </label>
    </div>
  )
}