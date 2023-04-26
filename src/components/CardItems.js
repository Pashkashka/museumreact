function CardItems() {
    return (<div className="cartItem">
        <img width={120} height={100} src="/img/pizza/p1.jpg" alt="Pizza" />
        <div>
            <p>Pizza "Margorita" </p>
            <b>20$</b>
        </div>
        <button className="removeButton">
            <img width={21} height={21} src="/img/remove.png" alt="Remove" />
        </button>
    </div>);
}
export default CardItems;