
import React from 'react';
import OrdersItems from './OrdersItems';
import axios from 'axios';

function Orders({ onCloseOrders, orders = [] }) {


    return (
        <div className="overlay">
            <div className="drawerFavorite">
                <button className="removeButton" onClick={onCloseOrders} >
                    <img width={21} height={21} src="/img/remove.png" alt="Remove" />
                </button>
                <h2>My orders</h2>

                <div className="Pizza">
                    {orders.length > 0 ? (orders.map((item, index) => (
                        <OrdersItems
                            key={index}
                            id={item.id}
                            exhibitionName={item.exhibitionName}
                            exhibitionImageURL={item.exhibitionImageURL}

                        />

                    ))) : (<h1>Order something</h1>)}



                </div>



            </div>
        </div>);

}
export default Orders;