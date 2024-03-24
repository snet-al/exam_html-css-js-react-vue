import styles from "./PhotoItem.module.css";

const PhotoItem = (props) => {
  return (
    <figure className={styles["photo-item"]}>
      <img src={props.src} alt={props.alt} className={styles.image} />
      <figcaption className={styles.figcaption}>
        {props.caption}
        <a href={props.href} className={styles.link}>
          {props.text}
        </a>
      </figcaption>
    </figure>
  );
};
export default PhotoItem;
