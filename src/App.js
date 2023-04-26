import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
import User from './components/User';
import Favorites from './components/Favorites';
import Autorization from './components/Autorization';

const arrPizza = [
    { title: 'Pizza "Margorita"', price: '20$', imageUrl:'/img/pizza/p1.jpg' },
    { title: 'Pizza "Pepperoni"', price: '25$', imageUrl: '/img/pizza/p2.jpg' },
    { title: 'Pizza "Ham with mushrooms"', price: '25$', imageUrl: '/img/pizza/p3.jpg' },
    { title: 'Pizza "Roman"', price: '30$', imageUrl: '/img/pizza/p4.jpg' },
    
];
const arrSushi = [
    { title: 'Roll "Philadelphia"', price: '40$', imageUrl: '/img/sushi/s1.jpg' },
    { title: 'Roll "California"', price: '40$', imageUrl: '/img/sushi/s2.jpg' },
    { title: 'Roll "Philadelphia with eel"', price: '45$', imageUrl: '/img/sushi/s4.jpg' },
    { title: 'Roll "Baked Roll"', price: '30$', imageUrl: '/img/sushi/s3.jpg' },
     
];



function App() { 
    const [cartOpened, setCartOpened] = React.useState(false);
    const [favoriteOpened, setFavoriteOpened] = React.useState(false);
    const [userOpened, setUserOpened] = React.useState(false);
   
    return (

        <div className="wrapper"> 
           

       <Autorization/>
            {cartOpened ? <Drawer  onCloseCart={() => setCartOpened(false)}/>: null}
            {userOpened ? <User onCloseUser={() => setUserOpened(false)} />: null}

            {favoriteOpened ? <  Favorites onCloseFavorite={() => setFavoriteOpened(false)} />: null}
           
            <Header
                onClickCart={() => setCartOpened(true)}
                onClickFavorite={() => setFavoriteOpened(true)}
                onClickUser={() => setUserOpened(true)}  />
            
          <div className="content">
              <div className="search-blok">
                  <img width={15} height={15} src="img/search.png" alt="Search" />
                  <input placeholder="Search..." />
              </div>
              <h1>Pizza </h1>
             
              <div className="Pizza">
                
                  {
                      arrPizza.map((obj) => (<Card
                          title={obj.title}
                          price={obj.price}
                          imageUrl={obj.imageUrl}
                          onClickPlus={() => console.log(obj)}
                          onClickFavorite={()=>console.log(obj) }
                      />))
                  }
                 

              </div>
              
          </div >
         

          <div className="content">
              <h1>Sushi </h1>
              <div className="Sushi">

                  {
                      arrSushi.map((obj) => (<Card
                          title={obj.title}
                          price={obj.price}
                          imageUrl={obj.imageUrl}
                          onClickPlus={() => console.log(obj)}
                          onClickFavorite={() => console.log(obj)}
                      />))
                  }





              </div>

          </div >
          

    </div>
  );
}

export default App;
