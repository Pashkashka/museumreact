import {Link } from 'react-router-dom';


function Header({ onClickCart, onClickFavorite, onClickUser, cartItems }) {
    const totalPrice = cartItems.reduce((sum, obj) => Number(obj.exhibitionPrice) + sum, 0);
    return (<header>
        
        <div className="headerLeft">
                <a href="/">
            
                <img width={40} height={40} src="/img/logo1.png " alt="logoType" />
           </a>
           
            <div className="headerInfo">
                <h3>Afisha</h3>
                <p >
                    Moscow Museums
                </p>
            </div>
            </div>
           
        <ul className="headerRight">
        <Link to="/login" className="Link">
                <span>Autorisation</span>
            </Link>
            <li >
                <button className="buttonCart" onClick={onClickCart}>
                    <img width={23} height={20} src="/img/cart.png "  alt="Cart"/>
                </button>
                <span> {totalPrice}Rub.</span>
            </li>
            <li>
                <button className="buttonUser" onClick={onClickUser}>
                    <img width={23} height={23} src="/img/user.png "  alt="user"/>
                </button>
            </li>
            <li>
                <button className="buttonFavorites" onClick={onClickFavorite}>
                    <img width={23} height={18} src="/img/unfavorites.png "  alt="favorite" />
                </button>
            </li>
        </ul>
    </header>
    );
}
export default Header;