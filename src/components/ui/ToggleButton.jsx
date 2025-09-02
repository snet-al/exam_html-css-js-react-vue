export function ToggleButton({children}) {
  return (
    <>
      <input type="checkbox" id="check" className="toggle"/>
      <label htmlFor="check">
        <span className="toggle-button-text">{children}</span>
        <span className="checkbox-symbol"></span>
      </label>
    </>
  )
}