function Toggle() {
  return (
    <label className="toggle">
      <input type="checkbox" />
      <span class="slider"></span> 
      <span className="label-text">Make photos grayscale</span>
    </label>
  );
}

export default Toggle;