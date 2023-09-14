import Title from "../UI/Title/Title";
import Button from "../UI/Button/Button";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import styles from "./ToggleHeader.module.css";

const ToggleHeader = () => {
  return (
    <nav className={styles["header-container"]}>
      <ToggleSwitch />
      <Title className={styles["header-title"]} text="Make Photos Grayscale" />
      <Button className={styles["fetch-btn"]} text="Fetch New Photos" />
    </nav>
  );
};
export default ToggleHeader;
