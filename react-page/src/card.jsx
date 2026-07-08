function Cart({ photo, grayscale }) {//creates the setup of the carts
    return (
        <div className="cart">
            <img 
                src={photo.image} 
                alt={photo.name}
                className={grayscale ? 'grayscale' : ''}
            />
            <div className="overlay">
                <h4>{photo.name}</h4>
                <p>{photo.link}</p>
            </div>
        </div>
    );
}

export default Cart;