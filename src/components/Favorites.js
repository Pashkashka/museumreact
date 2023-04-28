import CardItems from './CardItems'

function Favorites({ onCloseFavorite, items = [] }) {
    return (
        <div  className="overlay">
            <div className="drawer">
                <button className="removeButton" onClick={onCloseFavorite} >
                    <img width={21} height={21} src="/img/remove.png" alt="Remove" />
                </button>
                <h2>Favorites</h2>

                <div className="items">
                    {items.map((obj) => (
                        <div className="cartItem">
                            <img width={120} height={100} src={obj.imageUrl} alt="Pizza" />
                            <div>
                                <p>{obj.title} </p>
                                <b>{obj.price}</b>
                            </div>
                            <button className="removeButton">
                                <img width={21} height={21} src="/img/remove.png" alt="Remove" />
                            </button>
                        </div>))}



                </div>

                

            </div>
        </div>);

}
export default Favorites;