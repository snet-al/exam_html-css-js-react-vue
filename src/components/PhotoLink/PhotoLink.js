import styles from "./PhotoLink.module.css";
const PhotoLink = (props) => {
  return (
    <a href={props.href} className={styles.link}>
      {props.text}
    </a>
  );
};

export default PhotoLink;
