import Button from "../UI/Button/Button";

const ToggleSwitch = () => {
  return (
    <section className="switch-button">
      <label className="switch">
        <input type="checkbox" />
        <Button className="switch-slider" />
      </label>
    </section>
  );
};

export default ToggleSwitch;
