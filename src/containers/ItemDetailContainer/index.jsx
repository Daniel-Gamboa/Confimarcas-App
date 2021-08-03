import { useEffect, useState, useContext } from "react";
import { Container } from "react-bootstrap";
import { ItemDetailComponent } from "../../components/ItemDetailComponent";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

export function ItemDetailContainer() {
  const [producto, setProducto] = useState([]);

  const { id } = useParams();
  const { products, setAddToCart, setIsAdded } = useContext(CartContext)

  useEffect(() => {
    if (id) {
      const idProducto = products.find(product => product.id === parseInt(id))
      setProducto(idProducto);
      setAddToCart(false);
      setIsAdded(false); 
    }
  }, [id])

  return (
    <>
      <Container >
        {/* {
          products.map(producto => {
            return (
              <div>
                <h1>{producto.nombre}</h1>
              </div>
            )
          })
        } */}
        {/* {products.length > 0 ? products[0].precio : 'No hay producto en BD'} */}
        <ItemDetailComponent key={producto.id} id={producto.id} img={producto.imagen} nombre={producto.nombre} descripcion={producto.descripcion} precio={producto.precio} stock={producto.stock} />
      </Container>
    </>
  )
};