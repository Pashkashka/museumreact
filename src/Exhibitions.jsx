import Card from './components/Card';

function Exhibitions({
    items,
    onAddToCart,
    onAddToFavorite,
    museum,
    favoriteItems
}) {
    return (<div className="content">
        <h1>{museum.name}</h1>
        <p>{museum.description}</p>
        <h3>Phone Number:{museum.phoneNum}</h3> 
        <h3>Adress:{museum.adress}</h3>
        <h3>Metro:{museum.metro}</h3>
        
        
        <div className="Map">
            <iframe src={museum.map}
                style={{ width: '600px', height: '300px', border: '0' }}
                title="gg"
            ></iframe>
        </div>


        <h3>Exhibitions of {museum.name} </h3>

        <div className="Pizza">

            {
                items.map((item, index) => (

                    <Card

                        key={index}
                        {...item }
                        onPlus={(obj) => onAddToCart(obj)}
                        onFavorite={(obj) => onAddToFavorite(obj)}
                        favorited={favoriteItems.some((obj)=>Number(obj.id)===Number(item.id)) }

                    />

                ))
            } 


        </div>

    </div >);
}
export default Exhibitions;


