import Gallery from "../components/Gallery";

export default function Home({ photos, grayscaleOn }) {
  return <Gallery photos={photos} grayscaleOn={grayscaleOn} />;
}
