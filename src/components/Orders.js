import Card from './Card';
import React from 'react';

import axios from 'axios';

function Orders({onCloseOrders }) {


    return (
        <div className="overlay">
            <div className="drawerFavorite">
                <button className="removeButton" onClick={onCloseOrders} >
                    <img width={21} height={21} src="/img/remove.png" alt="Remove" />
                </button>
                <h2>My orders</h2>

                <div className="Pizza">
                    {[].map((item, index) => (
                        <Card


                        />))}



                </div>



            </div>
        </div>);

}
export default Orders;