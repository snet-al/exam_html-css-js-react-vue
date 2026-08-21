import "../css/PhotoCard.css"

function PhotoCard({photo, makeGray}){
    return (
        <figure>
            <button className="favoriteBtn">♥</button>
            <img src= {`https://picsum.photos/id/${photo.id}/${photo.width}${makeGray}`} alt="photo" />
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
