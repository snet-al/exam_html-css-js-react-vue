import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import styles from "./PhotoGallery.module.css";

const PhotoGallery = () => {
  const photoData = [
    {
      id: 1,
      src: "https://plus.unsplash.com/premium_photo-1688120025345-6d7d87cb7ae0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
      alt: "Spain",
      text: "https://unsplash.com/photos/pwaaqfoMibl",
      caption: "Lukas Budimaier",
      href: "https://plus.unsplash.com/premium_photo-1688120025345-6d7d87cb7ae0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1692988322216-9e58689896ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1873&q=80",
      alt: "England",
      text: "https://unsplash.com/photos/pwaaqfoMibl",
      caption: "Lukas Budimaier",
      href: "https://images.unsplash.com/photo-1692988322216-9e58689896ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1873&q=80",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1691738026952-3dee46d475e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      alt: "Portugal",
      text: "https://unsplash.com/photos/pwaaqfoMibl",
      caption: "Lukas Budimaier",
      href: "https://images.unsplash.com/photo-1691738026952-3dee46d475e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1603224539456-606f29bd2a0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1970&q=80",
      alt: "Library",
      text: "https://unsplash.com/photos/pwaaqfoMibl",
      caption: "Lukas Budimaier",
      href: "https://images.unsplash.com/photo-1603224539456-606f29bd2a0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1970&q=80",
    },
  ];
  return (
    <div className={styles["home-page"]}>
      <Header />
      <Main photos={photoData} />
    </div>
  );
};

export default PhotoGallery;
