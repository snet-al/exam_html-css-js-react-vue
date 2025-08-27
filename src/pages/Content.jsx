import { Header } from '../components/componentsUI/Header'
import { Toolbar } from './Toolbar'
import { ImageGrid } from './ImageGrid'
import { MorePhotos } from '../components/componentsUI/MorePhotos'
import './Content.css'

export function Content() {
  return (
    <>
      <Header />
      <Toolbar />
      <ImageGrid />
      <MorePhotos/>
    </>
  )
}