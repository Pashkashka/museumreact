function Header(props) {
    return (<header>
        <div className="headerLeft">
            <img width={40} height={40} src="/img/logo.png " />
            <div className="headerInfo">
                <h3>Love on both cheeks!</h3>
                <p >
                    The best pizza and sushi in Moscow!
                </p>
            </div>
        </div>
        <ul className="headerRight">
            <li >
                <button className="buttonCart" onClick={props.onClickCart}>
                    <img width={23} height={23} src="/img/cart.png " />
                </button>
                <span> 0 $.</span>
            </li>
            <li>
                <button className="buttonUser" onClick={props.onClickUser}>
                    <img width={23} height={18} src="/img/user.png " />
                </button>
            </li>
            <li>
                <button className="buttonFavorites" onClick={props.onClickFavorite}>
                    <img width={23} height={18} src="/img/unfavorites.png " />
                </button>
            </li>
        </ul>
    </header>
    );
}
export default Header;