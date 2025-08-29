import { dummyData } from '../../store/dummyData';
import { remainingImages, selectRandomImages } from '../../utils/imageSelector';
import './MorePhotos.css'

export function MorePhotos({ images, setImages }) {
  function addMorePhotos() {
    const remaining = remainingImages(images, dummyData);

    if (remaining.length === 0) return;

    const selected = selectRandomImages(remaining);
    

    const newImages = [...images, ...selected];
    setImages(newImages);
    sessionStorage.setItem('loadedImages', JSON.stringify(newImages));
  }

  return (
    <div>
      <button className= {`more-photos-button 
        ${images.length === 0 && "more-photos-hide"}`
      } 
        onClick={addMorePhotos}> More Photos
      </button>
    </div>
  )
}