import styles from "./Image.module.css";

const Image = (props) => {
  return <img src={props.src} alt={props.alt} className={styles.image} />;
};
export default Image;
