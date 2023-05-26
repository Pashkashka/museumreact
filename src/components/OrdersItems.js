import React from 'react';


function OrdersItems({  exhibitionName, exhibitionPrice, exhibitionImageURL }) {

    // const userId = localStorage.getItem('userId');
    


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

           
        </div>

    </div>);
}
export default OrdersItems;