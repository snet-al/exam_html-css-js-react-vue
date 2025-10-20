import ToggleSwitch from "./UI/ToggleSwitch";
import Button from "./UI/Button";

export default function Controls({ grayscaleOn, onToggle, onFetch }) {
  return (
    <section className="controls-section">
      <ToggleSwitch
        label="Make photos grayscale"
        checked={grayscaleOn}
        onChange={onToggle}
      />
      <Button type="button" onClick={onFetch}>
        Fetch New Photos
      </Button>
    </section>
  );
}
