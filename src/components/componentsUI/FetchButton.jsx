import { dummyData } from '../../store/dummyData.js'
import { fetchNewPhotos } from '../../utils/imageSelector.js';
import './FetchButton.css'

export function FetchButton({ setImages, images }) {
const fetchPhotos = ()=>{
  const selected = fetchNewPhotos(images, dummyData);
  setImages(selected);
  sessionStorage.setItem('loadedImages', JSON.stringify(selected))
};
  return (
    <button className="fetch-button" onClick={fetchPhotos}>
      Fetch New Photos
    </button>
  )
}