import React from 'react';
import CardItems from './CardItems';
function Drawer({ onAddToCart, onCloseCart, onRemove, items = [] }) {
   

    return (
        <div className="overlay">
            <div className="drawer">
                <button className="removeButton" onClick={onCloseCart}>
                    <img width={21} height={21} src="/img/remove.png" alt="Remove" />
                </button>
                <h2>Cart</h2>

                <div className="Items">
                    {items.map((item, index) => (
                        <CardItems

                            key={index}
                            id={item.id}
                            exhibitionName={item.exhibitionName}
                            exhibitionPrice={item.exhibitionPrice}
                            exhibitionImageURL={item.exhibitionImageURL}
                            onPlus={(obj) => onAddToCart(obj)}
                            added={true }

                        />))}
                </div>

                <ul className="cartTotalBlok">
                    <li className="Total">
                        <span>Total:</span>
                        <div></div>
                        <b>0Rub</b>
                    </li>
                </ul>

                <button className="chekBtn">Chekout</button>
            </div>
        </div>
    );
}

export default Drawer;
