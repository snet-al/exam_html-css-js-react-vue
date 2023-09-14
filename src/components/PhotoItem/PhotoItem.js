import Image from "../Image/Image";
import PhotoCaption from "../PhotoCaption/PhotoCaption";
import styles from "./PhotoItem.module.css";

const PhotoItem = (props) => {
  return (
    <figure className={styles["photo-item"]}>
      <Image src={props.src} alt={props.alt} />
      <PhotoCaption
        caption={props.caption}
        href={props.href}
        text={props.text}
      />
    </figure>
  );
};
export default PhotoItem;
