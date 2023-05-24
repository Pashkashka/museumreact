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
import Registration from './components/Registration';
import Orders from './components/Orders'



 export const AppContext = React.createContext({});





function App() {

    /*const onAddToCart = (obj) => {
        axios.post('https://644b992817e2663b9df340a0.mockapi.io/Items', obj);    
        setCartItems((prev) => [...prev, obj]);
    };*/
    const onAddToCart = async (obj) => {
        try {
            if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
                axios.delete(`https://646d02667b42c06c3b2c69e3.mockapi.io/Cart/${obj.id}`);
                setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
            }
            else {
                const { data } = await axios.post('https://646d02667b42c06c3b2c69e3.mockapi.io/Cart', obj);
                setCartItems((prev) => [...prev, data]);
            }

        } catch (error) {
            alert('Do not add to cart');

        }
    };
    const onAddToFavorite = async (obj) => {
        try {
            if (favoriteItems.find((item) => Number(item.id) === Number(obj.id))) {
                axios.delete(`https://646d02667b42c06c3b2c69e3.mockapi.io/Favorites/${obj.id}`);
                setFavoriteItems((prev) => prev.filter((item) => Number(item.id )!== Number(obj.id)));
            }
            else {
                const { data } = await axios.post('https://646d02667b42c06c3b2c69e3.mockapi.io/Favorites', obj);
                setFavoriteItems((prev) => [...prev, data]);
            }

        } catch (error) {
            alert('Do not add to favorites');

        }
    };
   /* const onAddToFavorite = (obj) => {
        axios.get('https://644b992817e2663b9df340a0.mockapi.io/favorite${obj.exhibitionNameId}')
    .then(({ data }) => {
            if (data.length > 0) {
                axios.delete('https://644b992817e2663b9df340a0.mockapi.io/favorite/${data[0].id}');
                    setFavoriteItems((prev) => prev.filter((item) => item.productId !== obj.productId));
            } else {
                axios.post('https://644b992817e2663b9df340a0.mockapi.io/favorite', obj);
                setFavoriteItems((prev) => [...prev, obj]);
            }
        });
    };*/

    //const museumCodeId = localStorage.getItem('museumCodeId');

    const [items, setItems] = React.useState([]);
    React.useEffect(() => {

        axios.get('https://644b992817e2663b9df340a0.mockapi.io/Items').then((res) => {
            setItems(res.data);
        });
         
    }, []);

   

   /* const onRemoveCartItem = (id) => {
       // console.log(id);
        axios.delete(`Вставь ссылку/${id}`);

        setCartItems((prev) => prev.filter((obj) => obj.id !== id));
    };*/
   

    const [cartOpened, setCartOpened] = React.useState(false);
    const [favoriteOpened, setFavoriteOpened] = React.useState(false);
    const [userOpened, setUserOpened] = React.useState(false);
    const [museums, setMuseums] = React.useState([]);
    const [user, setUser] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [favoriteItems, setFavoriteItems] = React.useState([]);
    const [totalPrice, setTotalPrice] = React.useState(0);
    
   

    React.useEffect(() => {
       
        

            axios.get('https://644b992817e2663b9df340a0.mockapi.io/museums').then((res) => {
                setMuseums(res.data);
            });

        axios.get('https://646d02667b42c06c3b2c69e3.mockapi.io/Cart').then((res) => {
            setCartItems(res.data);
        });
       

       axios.get('https://646d02667b42c06c3b2c69e3.mockapi.io/Favorites').then((res) => {
            setFavoriteItems(res.data);
        });
       
        
    }, []);


    const userId = localStorage.getItem('userId');

    

   
    const [selectedMuseum, setSelectedMuseum] = React.useState(null);
    const handleMuseumClick = (museum) => {
         setSelectedMuseum(museum);
         setItems(items.filter(item => item.museumCodeId === museum.id));
       
       
    };
    
    



    const [searchValue, setSearchValue] = React.useState('');
    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    };

    const [ordersOpened, setOrdersOpened] = React.useState(false);
    

    return (
        <Router>
            
                <div className="wrapper">



                {cartOpened ? <Drawer   cartItems={cartItems} onCloseCart={() => setCartOpened(false)} onAddToCart={onAddToCart} setCartItems={setCartItems} /> : null}
                {userOpened ? <User cartItems={cartItems} favoriteItems={favoriteItems} userId={userId} onCloseUser={() => setUserOpened(false)} onClickOrders={() => setOrdersOpened(true)} /> : null}

                {favoriteOpened ? <  Favorites favoriteItems={favoriteItems} onCloseFavorite={() => setFavoriteOpened(false)} onAddToCart={onAddToCart} onAddToFavorite={onAddToFavorite} /> : null}
                {ordersOpened ? <Orders onCloseOrders={() => setOrdersOpened(false)} />: null }

                    <Header
                    onClickCart={() => setCartOpened(true)}
                    onClickFavorite={() => setFavoriteOpened(true)}
                    onClickUser={() => setUserOpened(true)}
                    cartItems={cartItems }

                />

<Routes>
                    <Route path="/exhibitions" element=

                        {selectedMuseum && <Exhibitions
                            cartItems={cartItems}
                            favoriteItems={favoriteItems}
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
                        <Route path="/login" element={
                            <Autorization
                            

                            />}> </Route>
                        <Route path="/registration" element={< Registration
                            


                        />}>

                        </Route>

                    </Routes>


                </div>
           
        

           
        </Router>

    );
}
export default App;
