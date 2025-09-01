import { Header } from '../components/Header'
import { Toolbar } from '../components/Toolbar'
import { ImageGrid } from '../components/ImageGrid'
import { MorePhotos } from '../components/componentsUI/MorePhotos'
import './Content.css'

export function Content() {
  return (
    <main className="content">
      <Toolbar />
      <ImageGrid />
      <MorePhotos/>
    </main>
  )
}