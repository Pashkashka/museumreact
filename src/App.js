import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
import User from './components/User';
import Favorites from './components/Favorites';
import Autorization from './components/Autorization';






function App() {
    const [items, setItems] = React.useState([]);
    React.useEffect(() => {
        fetch('https://644b992817e2663b9df340a0.mockapi.io/Items').then((res) => {
            return res.json();
        }).then((json) => {
            setItems(json);
        });
    }, []);

    const [cartItems, setCartItems] = React.useState([]);
    const [favoriteItems, setFavoriteItems] = React.useState([]);

    const [cartOpened, setCartOpened] = React.useState(false);
    const [favoriteOpened, setFavoriteOpened] = React.useState(false);
    const [userOpened, setUserOpened] = React.useState(false);
    const onAddToCart = (obj) => {
        setCartItems(prev=>[...prev, obj]);
    }
    const onAddToFavorite = (obj) => {
        setFavoriteItems(prev => [...prev, obj]);
    }
    return (
 
        <div className="wrapper">


            <Autorization />
            {cartOpened ? <Drawer items={ cartItems} onCloseCart={() => setCartOpened(false)} /> : null}
            {userOpened ? <User onCloseUser={() => setUserOpened(false)} /> : null}

            {favoriteOpened ? <  Favorites items={favoriteItems } onCloseFavorite={() => setFavoriteOpened(false)} /> : null}

            <Header
                onClickCart={() => setCartOpened(true)}
                onClickFavorite={() => setFavoriteOpened(true)}
                onClickUser={() => setUserOpened(true)} />

            <div className="content">
                <div className="search-blok">
                    <img width={15} height={15} src="img/search.png" alt="Search" />
                    <input placeholder="Search..." />
                </div>
                <h1>Pizza </h1>

                <div className="Pizza">

                    {
                        items.map((item) => (<Card
                            title={item.title}
                            price={item.price}
                            imageUrl={item.imageUrl}
                            onPlus={(obj) => onAddToCart(obj)}
                            onFavorite={(obj) => onAddToFavorite(obj)}
                        />))
                    }


                </div>

            </div >


           


        </div>
    );
}

export default App;

