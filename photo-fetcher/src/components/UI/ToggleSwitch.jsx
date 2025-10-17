export default function ToggleSwitch({
  label = "Make photos greyscale",
  ...props
}) {
  return (
    <label className="toggle">
      <input type="checkbox" {...props} />
      <span className="switch"></span>
      {label}
    </label>
  );
}
