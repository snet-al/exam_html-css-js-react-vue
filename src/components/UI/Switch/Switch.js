import Button from "../Button/Button";
import styles from "./Switch.module.css";

const Switch = (props) => {
  return (
    <section className={styles["toggle-section"]}>
      <label className={styles["toggle-switch"]}>
        <input type="checkbox" />
        <Button className={styles["slider-toggle"]} />
        {props.children}
      </label>
    </section>
  );
};
export default Switch;
