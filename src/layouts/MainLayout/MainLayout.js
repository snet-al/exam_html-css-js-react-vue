import Header from "../../components/Header/Header";
import styles from "./MainLayout.module.css";

const MainLayout = (props) => {
  return (
    <section className={styles["home-page"]}>
      <Header />
      <main className={styles.main}>
        <section className={styles["photo-gallery"]}>{props.children}</section>
      </main>
    </section>
  );
};
export default MainLayout;
