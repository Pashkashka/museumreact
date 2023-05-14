import Card from './components/Card';

function Exhibitions({
    items,
    onAddToCart,
    onAddToFavorite,
    museum
}) {
    return (<div className="content">
        <h1>{museum.title}</h1>
        <h3>Metro:{museum.metro}</h3>
        <div className="Map">
            <iframe src={museum.map }
                style={{ width: '600px', height: '300px', border: '0' }}
                title="gg"
            ></iframe>
        </div>


        <h3>Exhibitions of {museum.title} </h3>

        <div className="Pizza">

            {
                items.map((item) => (

                    <Card

                        key={item.id}
                        title={item.title}
                        price={item.Price}
                        imageUrl={item.imageUrl}
                        onPlus={(obj) => onAddToCart(obj)}
                        onFavorite={(obj) => onAddToFavorite(obj)}

                    />

                ))
            }


        </div>

    </div >);
}
export default Exhibitions;


