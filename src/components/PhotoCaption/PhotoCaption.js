import PhotoLink from "../PhotoLink/PhotoLink";
import styles from "./PhotoCaption.module.css";

const PhotoCaption = (props) => {
  return (
    <figcaption className={styles.figcaption}>
      {props.caption}
      <PhotoLink href={props.href} text={props.text} />
    </figcaption>
  );
};

export default PhotoCaption;
