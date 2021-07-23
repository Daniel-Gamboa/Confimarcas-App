import { createContext, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import productos from "../BD/productos.json";

// crear el contexto

export const ShopContext = createContext();

// componente que provee los datos
export function CartProvider({ children }) {
  const [listaProductos, setListaProductos] = useState([]);

  useEffect(() => {
    function traerData() {
      setTimeout(() => {
        new Promise((resolve, reject) => {
          resolve(listaProductos);
          setListaProductos(listaProductos);
        });
      }, 2000)
    };

    traerData();
    console.log(productos);
  }, [])

  return (
    <ShopContext.Provider value={{ productos }}>
      {listaProductos.length > 0 ? children : <Spinner animation="border" variant="info" />}
    </ShopContext.Provider>
  )
};