import PhotoItem from "../PhotoItem/PhotoItem";
import styles from "./PhotoContainer.module.css";

const PhotoContainer = (props) => {
  return (
    <section className={styles["photo-gallery"]}>
      {props.photos.map((photo) => (
        <PhotoItem
          key={photo.id}
          id={photo.id}
          src={photo.src}
          alt={photo.alt}
          text={photo.text}
          caption={photo.caption}
          href={photo.href}
        />
      ))}
    </section>
  );
};

export default PhotoContainer;
