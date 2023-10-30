import MainLayout from "../../layouts/MainLayout/MainLayout";
import PhotoItem from "../../components/PhotoItem/PhotoItem";
import photoData from "../../store/photoData.json";

const PhotoGalleryPage = () => {
  return (
    <MainLayout>
      {photoData.map((photo) => (
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
    </MainLayout>
  );
};

export default PhotoGalleryPage;
