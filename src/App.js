import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
import User from './components/User';
import Favorites from './components/Favorites';
import Autorization from './components/Autorization';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Museums from './Museums';
import Exhibitions from './Exhibitions';






function App() {

    const onAddToCart = (obj) => {
       //  axios.post('https://644b992817e2663b9df340a0.mockapi.io/cart', obj);
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
      /*  axios.get('https://644b992817e2663b9df340a0.mockapi.io/cart').then((res) => {
             setCartItems(res.data);
         });*/
    }, []);

    const [cartItems, setCartItems] = React.useState([]);
    const [favoriteItems, setFavoriteItems] = React.useState([]);
    
   
    const onRemoveCartItem = (title) => {
        /* axios.delete('https://644b992817e2663b9df340a0.mockapi.io/cart/${id}' );*/
        setCartItems((prev) => prev.filter((item) => item.title !== title));
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
    const [selectedMuseum, setSelectedMuseum] = React.useState(null);
    const handleMuseumClick = (museum) => {
        setSelectedMuseum(museum);
        setItems(items.filter(item => item.museumId === museum.id));
    };
    

    const [searchValue, setSearchValue] = React.useState('');
    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    };
   
  
 
  
    return (
        <Router>
            
        <div className="wrapper">


            <Autorization />
            
            {cartOpened ? <Drawer items={cartItems} onCloseCart={() => setCartOpened(false)} onRemove={onRemoveCartItem} /> : null}
            {userOpened ? <User onCloseUser={() => setUserOpened(false)} /> : null}

            {favoriteOpened ? <  Favorites items={favoriteItems} onCloseFavorite={() => setFavoriteOpened(false)} onRemove={onRemoveFavoriteItem} /> : null}
           
            <Header
                onClickCart={() => setCartOpened(true)}
                onClickFavorite={() => setFavoriteOpened(true)}
                onClickUser={() => setUserOpened(true)} />


         <Routes>
                    <Route path="/exhibitions" element=
                        
                        {selectedMuseum && <Exhibitions
                            onChangeSearchInput={onChangeSearchInput}
                            searchValue={searchValue}
                            setSearchValue={setSearchValue}
                            items={items}
                            onAddToCart={onAddToCart}
                            onAddToFavorite={onAddToFavorite}
                            museum={selectedMuseum}
                            />}> </Route>
                        
                <Route path="/" element={
                    <Museums
                            museums={museums}
                            onMuseumClick={handleMuseumClick}
                        onChangeSearchInput={onChangeSearchInput}
                        searchValue={searchValue}
                        setSearchValue={setSearchValue} />}>
                </Route>
            </Routes>
               
           
           


            





            </div>
        </Router>
          
    );
}





   

export default App;
