import { dummyData } from '../../store/dummyData.js'
import { remainingImages, selectRandomImages } from '../../utils/imageSelector.js';
import './FetchButton.css'

export function FetchButton({ setImages, images }) {
  const fetchPhotos = () => {
    const remaining = remainingImages(images, dummyData);
    let selected = [];
    if (remaining.length === 0) 
      selected = selectRandomImages(dummyData);
    else
     selected = selectRandomImages(remaining);

    setImages(selected);
    sessionStorage.setItem('loadedImages', JSON.stringify(selected));
  };

  return (
    <div className="fetch-button-div" onClick={fetchPhotos}>
      <button className="fetch-button">Fetch New Photos</button>
    </div>
  )
}