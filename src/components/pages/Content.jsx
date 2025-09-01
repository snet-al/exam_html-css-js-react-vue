import { Header } from '../componentsUI/Header'
import { Toolbar } from '../Toolbar'
import { ImageGrid } from '../ImageGrid'
import { MorePhotos } from '../componentsUI/MorePhotos'
import './Content.css'

export function Content() {
  return (
    <main className="content">
      <Header />
      <Toolbar />
      <ImageGrid />
      <MorePhotos/>
    </main>
  )
}