import React from 'react';
import CardItems from './CardItems';
import axios from 'axios';
import { AppContext } from '../App'

function Drawer({ onAddToCart, onCloseCart, onRemove, items = [], setCartOpened  }) {
    const { cartItems, setCartItems } = React.useContext(AppContext);

   // const [isOrderComplete, setIsOrderComplete] = React.useState(false);

   const onClickOrder = () => {
        axios.post('https://646d02667b42c06c3b2c69e3.mockapi.io/Favorites', items);
        
        setCartItems([]);
    }
    
    return (
        <div className="overlay">
            <div className="drawer">
                <button className="removeButton" onClick={onCloseCart}>
                    <img width={21} height={21} src="/img/remove.png" alt="Remove" />
                </button>
                <h2>Cart</h2>

                <div className="Items">
                    {items.length > 0 ? (
                        items.map((item, index) => (
                            <CardItems
                                key={index}
                                id={item.id}
                                exhibitionName={item.exhibitionName}
                                exhibitionPrice={item.exhibitionPrice}
                                exhibitionImageURL={item.exhibitionImageURL}
                                onPlus={(obj) => onAddToCart(obj)}
                                added={true}
                            />
                        ))
                    ) : (
                        
                                 <h1> Cart is empty</h1>)}
                </div>

                <ul className="cartTotalBlok">
                    <li className="Total">
                        <span>Total:</span>
                        <div></div>
                        <b>0Rub</b>
                    </li>
                </ul>

                <button onClick={onClickOrder} className="chekBtn">Chekout</button>
            </div>
        </div>
    );
}

export default Drawer;
