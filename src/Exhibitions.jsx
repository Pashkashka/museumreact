import Card from './components/Card';

function Exhibitions({
    items,
    onAddToCart,
    onAddToFavorite })
{
    return (<div className="content">


        
        <h1>Exhibitions </h1>

        <div className="Pizza">

            {
                items.map((item) => (

                    <Card

                        key={item.title}
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