export function ToggleButton({ isGrey, setIsGrey, children }) {
  function turnGreyscale() {
    setIsGrey(!isGrey);
  }

  return (
    <>
      <input
        type="checkbox"
        id="check"
        className="toggle"
        checked={isGrey}
        onChange={turnGreyscale}
      />
      <label htmlFor="check">
        <span className="toggle-button-text">{children}</span>
        <span className="checkbox-symbol"></span>
      </label>
    </>
  );
}
