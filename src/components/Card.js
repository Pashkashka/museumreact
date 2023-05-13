import React from 'react'
function Card({ onFavorite, onPlus, title, imageUrl, price }) {


    const [isAdded, setIsAdded] = React.useState(false);
    const onClickPlus = () => {
        onPlus({ title, imageUrl, price });
        setIsAdded(!isAdded);

    }
    const [isFavorite, setIsFavorite] = React.useState(false);
    const onClickFavorite = () => {
        onFavorite({ title, imageUrl, price });
        setIsFavorite(!isFavorite);
    }


    return (<div className="card">
        <img width={200} height={200} src={imageUrl} alt="Pizza" />

        <h5>{title} </h5>
        <div className="cardButt"></div>
        <div className="Price"></div>
        <div>
            <div>
                <span>Price:</span>
                <b>{price}</b>
            </div>

            <button className="button" onClick={onClickPlus}>
                <img width={21} height={21} src="/img/add.png" alt="Add" />
            </button>
            <button className="button" onClick={onClickFavorite}>
                <img width={21} height={21} src={isFavorite ? '/img/favorites.png' : '/img/unfavorites.png'} alt="Favorites" />
            </button>
        </div>

    </div>);
}
export default Card;