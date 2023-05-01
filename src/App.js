import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
import User from './components/User';
import Favorites from './components/Favorites';
import Autorization from './components/Autorization';
import axios from 'axios';







function App() {

    const onAddToCart = (obj) => {
         axios.post('https://644b992817e2663b9df340a0.mockapi.io/cart', obj);
        setCartItems((prev) => [...prev, obj]);
    };
    const onAddToFavorite = (obj) => {
        /* axios.post('https://644b992817e2663b9df340a0.mockapi.io/favorite', obj);*/
        setFavoriteItems((prev) => [...prev, obj]);
    };

    const [items, setItems] = React.useState([]);
    React.useEffect(() => {

        axios.get('https://644b992817e2663b9df340a0.mockapi.io/Items').then((res) => {
            setItems(res.data);
        });
        axios.get('https://644b992817e2663b9df340a0.mockapi.io/cart').then((res) => {
             setCartItems(res.data);
         });
    }, []);

    const [cartItems, setCartItems] = React.useState([]);
    const [favoriteItems, setFavoriteItems] = React.useState([]);
   
    const onRemoveCartItem = (id) => {
        /* axios.delete('https://644b992817e2663b9df340a0.mockapi.io/cart/${id}' );*/
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };
    const onRemoveFavoriteItem = (title) => {
        //axios.delete('https://644b992817e2663b9df340a0.mockapi.io/cart/${id}');
        setFavoriteItems((prev) => prev.filter((item) => item.title !== title));
    };

    const [cartOpened, setCartOpened] = React.useState(false);
    const [favoriteOpened, setFavoriteOpened] = React.useState(false);
    const [userOpened, setUserOpened] = React.useState(false);
    const [museums, setMuseums] = React.useState([]);
    React.useEffect(() => {

        axios.get('https://644b992817e2663b9df340a0.mockapi.io/museums').then((res) => {
            setMuseums(res.data);
        });
        
    }, []);


    const [searchValue, setSearchValue] = React.useState('');
    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    };
   

   
  
    return (

        <div className="wrapper">


            <Autorization />
           
            {cartOpened ? <Drawer items={cartItems} onCloseCart={() => setCartOpened(false)} onRemove={onRemoveCartItem} /> : null}
            {userOpened ? <User onCloseUser={() => setUserOpened(false)} /> : null}

            {favoriteOpened ? <  Favorites items={favoriteItems} onCloseFavorite={() => setFavoriteOpened(false)} onRemove={onRemoveFavoriteItem} /> : null}

            <Header
                onClickCart={() => setCartOpened(true)}
                onClickFavorite={() => setFavoriteOpened(true)}
                onClickUser={() => setUserOpened(true)} />

            
            <div className="content">


                <div className="search-blok">
                    <img width={15} height={15} src="img/search.png" alt="Search" />
                    <input onChange={onChangeSearchInput} value={searchValue} placeholder="Search..." />
                </div>
                <h1>{searchValue ? 'Search by request:   ' : 'Exhibitions'} </h1>

                <div className="Pizza">

                    {
                        items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item) => (<Card
                            key={item.title}
                            title={item.title}
                            price={item.price}
                            imageUrl={item.imageUrl}
                            onPlus={(obj) => onAddToCart(obj)}
                            onFavorite={(obj) => onAddToFavorite(obj)}
                        />))
                    }


                </div>

            </div >
         
               
           
           



            {/*  <div className="content">


                <div className="search-blok">
                    <img width={15} height={15} src="img/search.png" alt="Search" />
                    <input onChange={onChangeSearchInput} value={searchValue} placeholder="Search..." />
                </div>
                <h1>{searchValue ? 'Search by request:   ' : 'Museums'} </h1>

                <div className="Pizza">

                    {
                        items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item) => (
                           
                                <div className="card"  >

                                    <img width={200} height={200} src={item.imageUrl} alt="Museum" />

                                    <h5>{item.title} </h5>
                                    <div className="cardButt"></div>
                                    <div className="Price"></div>
                                </div>
                           

                        )
                        )
                    }


                </div>

            </div > */}





        </div>
    );
}


   

export default App;
