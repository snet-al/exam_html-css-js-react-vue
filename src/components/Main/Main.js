import PhotoContainer from "../PhotoContainer/PhotoContainer";
import styles from "./Main.module.css";

const Main = (props) => {
  return (
    <main className={styles.main}>
      <PhotoContainer photos={props.photos} />
    </main>
  );
};

export default Main;
