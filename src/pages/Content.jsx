import { useState } from 'react'
import { Toolbar } from '../components/Toolbar'
import { ImageGrid } from '../components/ImageGrid'
import { MorePhotos } from '../components/componentsUI/MorePhotos'
import './Content.css'

export function Content() {
  
  const [images, setImages] = useState(
    JSON.parse(sessionStorage.getItem('loadedImages')) || []);
  const [isGrey, setIsGrey] = useState(false);
  return (
    <main className="content">
      <Toolbar setImages= {setImages} isGrey={isGrey} setIsGrey={setIsGrey}/>
      <ImageGrid images={images} isGrey={isGrey}/>
      <MorePhotos images= {images} setImages={setImages} />
    </main>
  )
}