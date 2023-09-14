import Button from "../UI/Button/Button";
import styles from "./TogleSwitch.module.css";

const ToggleSwitch = () => {
  return (
    <section className={styles["toggle-section"]}>
      <label className={styles["toggle-switch"]}>
        <input type="checkbox" />
        <Button className={styles["slider-toggle"]} />
      </label>
    </section>
  );
};

export default ToggleSwitch;
