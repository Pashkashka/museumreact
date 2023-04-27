import React from 'react'
import App from './App'
function CardMuseum(props) {
    
    const [museumOpened, setMuseumOpened] = React.useState(false);
    const onClickMuseum = () => {
        setMuseumOpened(true);
    }
    return (<div className="card" onClick={onClickMuseum} >
        {museumOpened ? <App />: null}
        <img width={200} height={200} src={props.imageUrl} alt="Museum" />

        <h5>{props.title} </h5>
        <div className="cardButt"></div>
        <div className="Price"></div>
        
            
        </div>

    );
}
export default CardMuseum;