import { Toolbar } from '../components/Toolbar'
import { ImageGrid } from '../components/ImageGrid'
import { MorePhotos } from '../components/componentsUI/MorePhotos'
import './Content.css'

export function Content() {
  return (
    <>
      <Toolbar />
      <ImageGrid />
      <MorePhotos/>
    </>
  )
}