import { useEffect, useState, useContext } from "react";
import { Container } from "react-bootstrap";
import { ItemComponent } from "../../components/Item";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";

export function ItemListContainer() {
  const { products } = useContext(ShopContext)
  const [listaCategorias, setListaCategorias] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const categoria = products.filter(producto => producto.categoriaId === id);
      setListaCategorias(categoria);
    } else {
      setListaCategorias(products);
    }
  }, [id])

  return (
    <>
      {
        listaCategorias.map((producto, index) => {
          return (
            <>
              <Container>
                <ItemComponent key={index} img={producto.imagen} nombre={producto.nombre} descripcion={producto.descripcion} precio={producto.precio} id={producto.id} />
              </Container>
            </>
          )
        })
      }
    </>
  )
}