import Card from './Card';

function Favorites({ onAddToFavorite, onAddToCart, onCloseFavorite, onRemove, items = [] }) {
    return (
        <div className="overlay">
            <div className="drawerFavorite">
                <button className="removeButton" onClick={onCloseFavorite} >
                    <img width={21} height={21} src="/img/remove.png" alt="Remove" />
                </button>
                <h2>Favorites</h2>

                <div className="Pizza">
                    {items.map((item, index) => (
                        <Card

                            key={index}
                            id={item.id }
                            exhibitionName={item.exhibitionName}
                            exhibitionPrice={item.exhibitionPrice}
                            exhibitionImageURL={item.exhibitionImageURL}
                            onPlus={(obj) => onAddToCart(obj)}
                            onFavorite={(obj) => onAddToFavorite(obj)}
                            favorited={true }

                        />))}



                </div>



            </div>
        </div>);

}
export default Favorites;