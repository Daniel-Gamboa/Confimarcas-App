import { useEffect, useState, useContext } from "react";
import { Container } from "react-bootstrap";
import { ItemComponent } from "../../components/Item";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { getFirestore } from "../../firebase";

export function ItemListContainer() {
  const { products } = useContext(CartContext)
  const [listaCategorias, setListaCategorias] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const BD = getFirestore();
      const collection = BD.collection('Productos confimarcas');
      const response = collection.where('categoryId', "==", id).get();
      response.then((result) => {
        setListaCategorias(result.docs.map(element => ({ id: element.id, ...element.data() })));
      });
      response.catch((error) => {
        console.log('error', error)
      });
    } else {
      setListaCategorias(products);
    }
  }, [id])

  return (
    <>
      {
        listaCategorias.map((producto) => {
          return (
            <>
              <Container>
                <ItemComponent key={producto.id} img={producto.imagen} nombre={producto.nombre} descripcion={producto.descripcion} precio={producto.precio} id={producto.id} />
              </Container>
            </>
          )
        })
      }
    </>
  )
}