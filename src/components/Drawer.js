import React from 'react';

function Drawer({ onCloseCart, onRemove, items = [] }) {
   

    return (
        <div className="overlay">
            <div className="drawer">
                <button className="removeButton" onClick={onCloseCart}>
                    <img width={21} height={21} src="/img/remove.png" alt="Remove" />
                </button>
                <h2>Cart</h2>

                <div className="items">
                    {items.map((obj) => (
                        <div key={obj.id} className="cartItem">
                            <img width={120} height={100} src={obj.exhibitionImageURL} alt="Pizza" />
                            <div>
                                <p>{obj.exhibitionName}</p>
                                <b>{obj.exhibitionPrice}Rub</b>
                            </div>
                            <button className="removeButton" onClick={() => onRemove(obj.id)}>
                                <img width={21} height={21} src="/img/remove.png" alt="Remove" />
                            </button>
                        </div>
                    ))}
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
