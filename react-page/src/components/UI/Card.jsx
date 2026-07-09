function Card({ photo, grayscale }) {
    return (
        <article className="cart">
            <img 
                src={photo.image} 
                alt={photo.name}
                className={grayscale ? 'grayscale' : ''}
            />
            <div className="overlay">
                <h4>{photo.name}</h4>
                <p>{photo.link}</p>
            </div>
        </article>
    )
}

export default Card