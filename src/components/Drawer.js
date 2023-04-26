import CardItems from './CardItems'

function Drawer(props) {
    return (
        <div  className="overlay">
        <div className="drawer">
                <button className="removeButton" onClick={props.onCloseCart}>
            <img width={21} height={21} src="/img/remove.png" alt="Remove" />
        </button>
        <h2>Cart</h2>

        <div className="items">
                    <CardItems />
                    <CardItems />
                    <CardItems />
                   
                    


        </div>

        <ul className="cartTotalBlok">
            <li className="Total" >
                <span>Total:</span>
                <div></div>
                <b>0$</b>


            </li>

        </ul>
        <button className="chekBtn">Chekout</button>

        </div>
       </div> );

}
export default Drawer;