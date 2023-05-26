
import React from 'react';
import OrdersItems from './OrdersItems';
import axios from 'axios';

function Orders({onCloseOrders }) {

    const [orders, setOrders] = React.useState([]);
    React.useEffect(() => {

        axios.get('https://646cd32b7b42c06c3b2c1813.mockapi.io/Orders').then((res) => {
            setOrders(res.data);
        });

    }, []);
    return (
        <div className="overlay">
            <div className="drawerFavorite">
                <button className="removeButton" onClick={onCloseOrders} >
                    <img width={21} height={21} src="/img/remove.png" alt="Remove" />
                </button>
                <h2>My orders</h2>

                <div className="Pizza">
                    {orders.map((item, index) => (
                        <OrdersItems
                            key={index}
                            id={item.id}
                            exhibitionName={item.exhibitionName}
                            exhibitionPrice={item.exhibitionPrice}
                            exhibitionImageURL={item.exhibitionImageURL}
                            
                        />
                       
                       ))}



                </div>



            </div>
        </div>);

}
export default Orders;