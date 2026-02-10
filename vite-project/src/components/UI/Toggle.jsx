export default function Toggle({ label, checked, onChange }) {
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className="slider" aria-hidden="true" />
      <span className="switch-label">{label}</span>
    </label>
  );
}
