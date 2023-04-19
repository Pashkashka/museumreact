

function App() {
  return (
    <div className="wrapper">
          <header> 
              <div className="headerLeft">
                  <img width={40} hight={40}  src ="/img/logo.png "/ >
                 <div className="headerInfo">
                    <h3>Love on both cheeks!</h3>
                    <p>
                      The best pizza and sushi in Moscow!
                     </p>
                  </div>
              </div>
              <ul className="headerRight">
                  <li>
                      <button className="buttonCart">
                          <img width={23} hight={28} src="/img/cart.png " />
                      </button>
                      <span> 0 $.</span>
                  </li>
                  <li>
                      <button className="buttonUser">
                          <img width={23} hight={18} src="/img/user.png " />
                        </button>
                  </li>
              </ul>
          </header>






          <div className="content">
              <h1>Pizza </h1>
              <div className="Pizza">
                  <div className="card">
                      <img width={200} hight={200} src="/img/pizza/p1.jpg" alt="Pizza" />

                      <h5>Pizza "Margorita"</h5>
                      <div className="cardButt"></div>
                      <div className="Price"></div>
                      <div>
                          <div>
                              <span>Price:</span>
                              <b>20$</b>
                          </div>
                          <button className="button">
                              <img width={21} hight={11} src="/img/add.png" alt="Add" />
                          </button>
                      </div>

                  </div>
                  <div className="card">
                      <img width={220} hight={300} src="/img/pizza/p2.jpg" alt="Pizza" />

                      <h5>Pizza "Pepperoni"</h5>
                      <div className="cardButt"></div>
                      <div className="Price"></div>
                      <div>
                          <div>
                              <span>Price:</span>
                              <b>20$</b>
                          </div>
                          <button className="button">
                              <img width={21} hight={11} src="/img/add.png" alt="Add" />
                          </button>
                      </div>

                  </div>
                  <div className="card">
                      <img width={220} hight={300} src="/img/pizza/p3.jpg" alt="Pizza" />

                      <h5>Pizza "Ham and mushrooms"</h5>
                      <div className="cardButt"></div>
                      <div className="Price"></div>
                      <div>
                          <div>
                              <span>Price:</span>
                              <b>20$</b>
                          </div>
                          <button className="button">
                              <img width={21} hight={11} src="/img/add.png" alt="Add" />
                          </button>
                      </div>

                  </div>
                  <div className="card">
                      <img width={220} hight={200} src="/img/pizza/p4.jpg" alt="Pizza" />

                      <h5>Pizza "Roman"</h5>
                      <div className="cardButt"></div>
                      <div className="Price"></div>
                      <div>
                          <div>
                              <span>Price:</span>
                              <b>20$</b>
                          </div>
                          <button className="button">
                              <img width={21} hight={11} src="/img/add.png" alt="Add" />
                          </button>
                      </div>

                  </div>
              </div>
              
          </div >





          <div className="content">
              <h1>Sushi </h1>
              <div className="Sushi">
                  <div className="card">
                      <img width={200} hight={200} src="/img/sushi/s1.jpg" alt="Roll" />

                      <h5>Roll  "Philadelphia"</h5>
                      <div className="cardButt"></div>
                      <div className="Price"></div>
                      <div>
                          <div>
                              <span>Price:</span>
                              <b>20$</b>
                          </div>
                          <button className="button">
                              <img width={21} hight={11} src="/img/add.png" alt="Add" />
                          </button>
                      </div>

                  </div>
                  <div className="card">
                      <img width={220} hight={300} src="/img/sushi/s4.jpg" alt="Roll" />

                      <h5>Roll  "Philadelphia with eel"</h5>
                      <div className="cardButt"></div>
                      <div className="Price"></div>
                      <div>
                          <div>
                              <span>Price:</span>
                              <b>20$</b>
                          </div>
                          <button className="button">
                              <img width={21} hight={11} src="/img/add.png" alt="Add" />
                          </button>
                      </div>

                  </div>
                  <div className="card">
                      <img width={220} hight={300} src="/img/sushi/s2.jpg" alt="Roll" />

                      <h5>Roll  "California"</h5>
                      <div className="cardButt"></div>
                      <div className="Price"></div>
                      <div>
                          <div>
                              <span>Price:</span>
                              <b>20$</b>
                          </div>
                          <button className="button">
                              <img width={21} hight={11} src="/img/add.png" alt="Add" />
                          </button>
                      </div>

                  </div>
                  <div className="card">
                      <img width={220} hight={200} src="/img/sushi/s3.jpg" alt="Roll" />

                      <h5>Roll "Baked roll"</h5>
                      <div className="cardButt"></div>
                      <div className="Price"></div>
                      <div>
                          <div>
                              <span>Price:</span>
                              <b>20$</b>
                          </div>
                          <button className="button">
                              <img width={21} hight={11} src="/img/add.png" alt="Add" />
                          </button>
                      </div>

                  </div>
              </div>

          </div >

    </div>
  );
}

export default App;
