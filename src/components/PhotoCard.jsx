import "../styles/PhotoCard.css"

function PhotoCard({photo, grayScale}){
    return (
        <figure>
            <button className="favoriteBtn">♥</button>
            <img src= {`https://picsum.photos/id/${photo.id}/${photo.width}${grayScale}`} alt="photo" />
            <figcaption>
                <h3 className="title">{photo.author}</h3>
                <a className="link" 
                    target="_blank"
                    href={photo.url}>{photo.url}</a>
            </figcaption>  
        </figure>
    )
}

export default PhotoCard
