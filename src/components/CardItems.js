import React from 'react';


function CardItems({ id, onPlus, exhibitionName, exhibitionPrice, exhibitionImageURL, added = false }) {
    //const userId = localStorage.getItem('userId');

    const [isAdded, setIsAdded] = React.useState(added);
    const onClickPlus = () => {
        onPlus({ id, exhibitionName, exhibitionImageURL, exhibitionPrice });
        setIsAdded(!isAdded);

    }



    return (<div className="cartItem">
        <img className="CardImg" width={70} height={70} src={exhibitionImageURL} alt="Pizza" />

        <h5>{exhibitionName} </h5>
        <span >Price:</span>
        <b>{exhibitionPrice}</b>

        <div className="cardButt"></div>
        <div className="Price"></div>
        <div>


            <button className="removeButton" onClick={onClickPlus}>
                <img width={21} height={21} src={isAdded ? '/img/added.png' : '/img/add.png'} alt="Add" />
            </button>

        </div>

    </div>);
}
export default CardItems;