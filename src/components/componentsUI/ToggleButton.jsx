import './ToggleButton.css'

export function ToggleButton() {
  return (
    <>
      <input type="checkbox" id="check" className="toggle"/>
      <label htmlFor="check">
        <span className="toggle-button-text">Make photos greyscale</span>
        <span className="checkbox-symbol"></span>
      </label>
    </>
  )
}