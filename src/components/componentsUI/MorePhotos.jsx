import { dummyData } from '../../store/dummyData';
import { morePhotos } from '../../utils/imageSelector';
import './MorePhotos.css'

export function MorePhotos({ images, setImages }) {
  const addMorePhotos= ()=> {
    const newImages = morePhotos(images, dummyData);;
    setImages(newImages);
    sessionStorage.setItem('loadedImages', JSON.stringify(newImages));
  }

  return (
    <button className= {`more-photos-button 
      ${images.length === 0 && "more-photos-hide"}`
    } 
      onClick={addMorePhotos}> More Photos
    </button>  )
}