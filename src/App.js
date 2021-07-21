import React, { useEffect,useState } from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {HomeContainer} from './containers/HomeContainer';
import { ItemDetailContainer } from './containers/ItemDetailContainer';
import { ItemListContainer } from './containers/ItemListContainer';
import { VacioComponent} from './components/VacioComponent'
import { ShopContext} from './context/ShopContext';

function App() {

  const[listProducts, setListProducts] = useState([]);
  useEffect(() => {
    async function getData(){
    const response = await fetch ('../../BD/productos.json');
    const data = await response.json();
    setListProducts (data);
  }
  getData();
}, []);
  return (
    <>
    <BrowserRouter>
        <HomeContainer />

        <Switch>
    <ShopContext.Provider value={{ listProducts, setListProducts}}>
          <Route exact path={'/'}>
            <ItemListContainer />
          </Route>

          <Route exact path={'/category/:id'}>
            <ItemListContainer />
          </Route>

          <Route exact path={'/item/:title'}>
            <ItemDetailContainer />
          </Route>
      </ShopContext.Provider>

          <Route exact path={'/cart'}>
            <VacioComponent />
          </Route>

          {/* <Route path={"*"} component={() => <h1>Error 404</h1>} /> */}
        </Switch>

      </BrowserRouter>
    </>
  );
}

export default App;


