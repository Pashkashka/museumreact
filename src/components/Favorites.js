import CardItems from './CardItems'

function Favorites(props) {
    return (
        <div  className="overlay">
            <div className="drawer">
                <button className="removeButton" onClick={props.onCloseFavorite} >
                    <img width={21} height={21} src="/img/remove.png" alt="Remove" />
                </button>
                <h2>Favorites</h2>

                <div className="items">
                    <CardItems />
                    <CardItems />
                    <CardItems />
                    


                </div>

                

            </div>
        </div>);

}
export default Favorites;