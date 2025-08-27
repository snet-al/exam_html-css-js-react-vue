import { ImageContainer } from './componentsUI/ImageContainer';
import './ImageGrid.css';

export function ImageGrid() {
  return (
    <div className="image-grid">
      <ImageContainer />
      <ImageContainer />
      <ImageContainer />
      <ImageContainer />
    </div>
  );
}