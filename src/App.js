import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {HomeContainer} from './containers/HomeContainer';
import { ItemDetailContainer } from './containers/ItemDetailContainer';
import { ItemListContainer } from './containers/ItemListContainer';

function App() {
  return (
    <>
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

          {/* <Route path={"*"} component={() => <h1>Error 404</h1>} /> */}
        </Switch>

      </BrowserRouter>
    </>
  );
}

export default App;


