import "../styles/PhotoGrid.css"
import PhotoCard from "./PhotoCard"

function PhotoGrid({currentPhotos, grayScale}){
    return (
        <div className="photo-grid">
            {currentPhotos.map(photo => <PhotoCard photo={photo} key={photo.id} grayScale={grayScale}/>)}
        </div>
    )
}

export default PhotoGrid