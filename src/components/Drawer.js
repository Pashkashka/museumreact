import React from 'react';
import CardItems from './CardItems';
import axios from 'axios';


//const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
function Drawer({ onAddToCart, onCloseCart, onRemove, cartItems = [], setCartItems }) {
    const onClickOrder = async () => {
        for (let i = 0; i < cartItems.length; i++) {
            const item = cartItems[i];
            await axios.post('https://localhost:7045/UserOrders', item);
            // await  delay(500);
        }

        for (let i = 0; i < cartItems.length; i++) {
            const item = cartItems[i];
            await axios.delete('https://localhost:7045/UserCart/' + item.id);
            // await  delay(500);
        }
        // setCartItems([]);
        window.location.href = '/';
    }

    const totalPrice = cartItems.reduce((sum, obj) => Number(obj.exhibitionPrice) + sum, 0);

    return (
        <div className="overlay">
            <div className="drawer">
                <button className="removeButton" onClick={onCloseCart}>
                    <img width={21} height={21} src="/img/remove.png" alt="Remove" />
                </button>
                <h2>Cart</h2>

                <div className="Items">
                    {cartItems.length > 0 ?
                        (cartItems.map((item, index) => (
                            <CardItems
                                key={index}
                                id={item.id}
                                exhibitionName={item.exhibitionName}
                                exhibitionPrice={item.exhibitionPrice}
                                exhibitionImageURL={item.exhibitionImageURL}
                                onPlus={(obj) => onAddToCart(obj)}
                                added={true}
                            />

                        ))) : (<h1>Cart is empty</h1>)}
                </div>

                <ul className="cartTotalBlok">
                    <li className="Total">
                        <span>Total:</span>
                        <div></div>
                        <b>{totalPrice}Rub</b>
                    </li>
                </ul>

                <button onClick={onClickOrder} className="chekBtn">Chekout</button>
            </div>
        </div>
    );
}

export default Drawer;