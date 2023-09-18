import Title from "../UI/Title/Title";
import Switch from "../UI/Switch/Switch";
import Button from "../UI/Button/Button";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Title text="Photo Fetcher" />
      <nav className={styles["header-container"]}>
        <Switch />
        <Title
          className={styles["header-title"]}
          text="Make Photos Grayscale"
        />
        <Button className={styles["fetch-btn"]} text="Fetch New Photos" />
      </nav>
    </header>
  );
};

export default Header;
