import { Toolbar } from '../Toolbar'
import { ImageGrid } from '../ImageGrid'

export function HomePage(){
  return(
    <div className="home-page">
      <Toolbar />
      <ImageGrid />
      <button className="more-photos-button">More Photos</button>
    </div>
  )
}