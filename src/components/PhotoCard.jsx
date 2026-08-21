import "../css/PhotoCard.css"

function PhotoCard(){
    return (
        <figure>
            <button className="favoriteBtn">♥</button>
            <img src="https://picsum.photos/200/300" alt="photo" />
            <figcaption>
                <h3 className="title">title</h3>
                <a className="link" 
                    target="_blank"
                    href="#">urljkndfg;kjadlkjfshg</a>
            </figcaption>  
        </figure>
    )
}

export default PhotoCard
