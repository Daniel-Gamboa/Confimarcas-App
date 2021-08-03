import {BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {HomeContainer} from './containers/HomeContainer';
import { ItemDetailContainer } from './containers/ItemDetailContainer';
import { ItemListContainer } from './containers/ItemListContainer';
import { CartProvider } from './context/CartContext';
import { CartComponent } from './components/Cart';

function App() {

 
  return (
    <>
    <CartProvider>
    <BrowserRouter>
        <HomeContainer />
        <Switch>
          <Route exact path={'/'}>
            <ItemListContainer />
          </Route>

          <Route exact path={'/category/:id'}>
            <ItemListContainer />
          </Route>

          <Route exact path={'/item/:id'}>
            <ItemDetailContainer />
          </Route>

          <Route exact path={'/cart'}>
            <CartComponent />
          </Route>

          {/* <Route path={"*"} component={() => <h1>Error 404</h1>} /> */}
        </Switch>

      </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;


