function Toggle({ checked, onChange }) {
  return (
    <label className="toggle">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="slider"></span>
      <span className="label-text">Make photos grayscale</span>
    </label>
  );
}

export default Toggle;