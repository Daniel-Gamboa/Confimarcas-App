import { useEffect, useState, useContext } from "react";
import { Container } from "react-bootstrap";
import { ItemDetailComponent } from "../../components/ItemDetailComponent";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";

export function ItemDetailContainer() {
  const [producto, setProducto] = useState([]);

  const { id } = useParams();
  const { products, setAddToCart, setIsAdded } = useContext(ShopContext)

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
        <ItemDetailComponent key={producto.id} id={producto.id} img={producto.imagen} nombre={producto.nombre} descripcion={producto.descripcion} precio={producto.precio} stock={producto.stock} />
      </Container>
    </>
  )
};