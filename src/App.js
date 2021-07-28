import {BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {HomeContainer} from './containers/HomeContainer';
import { ItemDetailContainer } from './containers/ItemDetailContainer';
import { ItemListContainer } from './containers/ItemListContainer';
import { VacioComponent} from './components/VacioComponent'
import { ShopProvider} from './context/ShopContext';

function App() {

 
  return (
    <>
    <ShopProvider>
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
            <VacioComponent />
          </Route>

          {/* <Route path={"*"} component={() => <h1>Error 404</h1>} /> */}
        </Switch>

      </BrowserRouter>
      </ShopProvider>
    </>
  );
}

export default App;


