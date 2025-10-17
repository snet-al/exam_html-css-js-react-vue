import Button from "./UI/Button";
import ToggleSwitch from "./UI/ToggleSwitch";

export default function Controls() {
  return (
    <section className="controls-section">
      <ToggleSwitch />
      <Button type="button">Fetch New Photos</Button>
    </section>
  );
}
