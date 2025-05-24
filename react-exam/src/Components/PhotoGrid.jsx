import { dummyPhotos } from "../Store/Data"

function PhotoGrid({ grayscale }){

 return(
    <section className="photo-grid js-photo">
        {dummyPhotos.map((photos) => (
            <figure class="photo-card">
                <img 
                key = {photos.id} 
                src={photos.download_url} 
                alt="Random photo" 
                style={{ filter: grayscale ? "grayscale(100%)" : "none" }}
                />
                <figcaption>
                    <p>{photos.author}</p>
                    <a href={photos.url}>{photos.url}</a>
                </figcaption>
            </figure>
            ))}
    </section>
 )
}

export default PhotoGrid