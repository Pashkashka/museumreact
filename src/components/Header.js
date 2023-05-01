function Header(props) {
    return (<header>
        <div className="headerLeft">
            <img width={40} height={40} src="/img/logo1.png "  alt="logoType" />
            <div className="headerInfo">
                <h3>Afisha</h3>
                <p >
                    Moscow and St.Petersburg Museums
                </p>
            </div>
        </div>
        <ul className="headerRight">
            <li >
                <button className="buttonCart" onClick={props.onClickCart}>
                    <img width={23} height={23} src="/img/cart.png "  alt="Cart"/>
                </button>
                <span> 0 $.</span>
            </li>
            <li>
                <button className="buttonUser" onClick={props.onClickUser}>
                    <img width={23} height={18} src="/img/user.png "  alt="user"/>
                </button>
            </li>
            <li>
                <button className="buttonFavorites" onClick={props.onClickFavorite}>
                    <img width={23} height={18} src="/img/unfavorites.png "  alt="favorite" />
                </button>
            </li>
        </ul>
    </header>
    );
}
export default Header;