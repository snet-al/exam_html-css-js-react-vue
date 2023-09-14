import ToggleHeader from "../ToggleHeader/ToggleHeader";
import Title from "../UI/Title/Title";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Title text="Photo Fetcher" />
      <ToggleHeader />
    </header>
  );
};

export default Header;
