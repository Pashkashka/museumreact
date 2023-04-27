import React from 'react';
import App from './App'
import Header from './components/Header';
import Drawer from './components/Drawer';
import User from './components/User';
import Favorites from './components/Favorites';
import Autorization from './components/Autorization';
import CardMuseum from './CardMuseum'
const arrMuseum = [
    { title: 'Jewish Museum',  imageUrl: '/img/jewishmuseum.jpg' },
    { title: 'Tretiakov gallery', imageUrl: '/img/tretgal.jpg' },
    

];




function MuseumApp() {
    const [cartOpened, setCartOpened] = React.useState(false);
    const [favoriteOpened, setFavoriteOpened] = React.useState(false);
    const [userOpened, setUserOpened] = React.useState(false);
  
    return (

        <div className="wrapper">


            <Autorization />
            {cartOpened ? <Drawer onCloseCart={() => setCartOpened(false)} /> : null}
            {userOpened ? <User onCloseUser={() => setUserOpened(false)} /> : null}

            {favoriteOpened ? <  Favorites onCloseFavorite={() => setFavoriteOpened(false)} /> : null}

            <Header
                onClickCart={() => setCartOpened(true)}
                onClickFavorite={() => setFavoriteOpened(true)}
                onClickUser={() => setUserOpened(true)} />

            <div className="content">
                <div className="search-blok">
                    <img width={15} height={15} src="img/search.png" alt="Search" />
                    <input placeholder="Search..." />
                </div>
                <h1>Museums </h1>

                <div className="Pizza"   >

                    {
                        arrMuseum.map((obj) => (<CardMuseum
                            onClickMuseum={() =>console.log(obj) }
                            title={obj.title}
                            imageUrl={obj.imageUrl}
                        />))
                    }


                </div>

            </div >


            

        </div>
    );
}

export default MuseumApp;
