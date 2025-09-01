import { ImageContainer } from './componentsUI/ImageContainer';
import './ImageGrid.css';

export function ImageGrid() {
  return (
    <section className="image-grid">
      <ImageContainer />
      <ImageContainer />
      <ImageContainer />
      <ImageContainer />
    </section>
  );
}