import { Toolbar } from '../Toolbar'
import { ImageGrid } from '../ImageGrid'

export function HomePage(){
  return(
    <div className="home-page">
      <h1>Photo fetcher</h1>
      <main>
        <Toolbar />
        <ImageGrid />
        <button className="more-photos-button">More Photos</button>
      </main>
    </div>
  )
}