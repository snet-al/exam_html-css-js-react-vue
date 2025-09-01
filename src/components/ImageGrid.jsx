import { ImageContainer } from './componentsUI/ImageContainer';
import './ImageGrid.css';

export function ImageGrid({images, isGrey}) {
  return (
    <section className="image-grid">
      {images.map((image)=>{
        return(
        <ImageContainer 
          key= {image.id}
          src= {image.download_url}
          href= {image.url}
          author= {image.author}
          isGrey= {isGrey}
        />)
      })}
    </section>
  );
}