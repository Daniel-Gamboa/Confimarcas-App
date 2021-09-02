import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { CartComponent } from "./components/Cart";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NavbarComponent } from "./components/NavbarComponent";
import { HomeContainer } from "./containers/HomeContainer";
import { ItemListContainer } from "./containers/ItemListContainer";
import { ItemDetailContainer } from "./containers/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import { FooterComponent } from "./components/Footer";

function App() {
  return (
    <>
      <CartProvider >
        <BrowserRouter>
          <NavbarComponent />

          <Switch>
            <Route exact path={'/'}>
              <HomeContainer greeting={'¡Conoce nuestras categorias!'} />
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

            <Route path={"*"} component={() => <h1>Error 404</h1>} />
          </Switch>

          <FooterComponent />
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
