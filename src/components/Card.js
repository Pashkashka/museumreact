import React from 'react';


function Card({id, onFavorite, onPlus, exhibitionName, exhibitionPrice, exhibitionImageURL, favorited=false }) {


    const [isAdded, setIsAdded] = React.useState(false);
    const onClickPlus = () => {
        onPlus({ id, exhibitionName, exhibitionImageURL, exhibitionPrice });
        setIsAdded(!isAdded);

    }
    const [isFavorite, setIsFavorite] = React.useState(favorited);
    const onClickFavorite = () => {
        onFavorite({ id, exhibitionName, exhibitionImageURL, exhibitionPrice });
        setIsFavorite(!isFavorite);
    }

    
    return (<div className="card">
        <img className="CardImg" width={200} height={200} src={exhibitionImageURL} alt="Pizza" />

        <h5>{exhibitionName} </h5>
        <div className="cardButt"></div>
        <div className="Price"></div>
        <div>
            <div>
                <span>Price:</span>
                <b>{exhibitionPrice}</b>
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