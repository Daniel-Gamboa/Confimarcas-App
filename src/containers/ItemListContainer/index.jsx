import { useContext, useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { ItemComponent } from "../../components/Item";
import listaProductos from "../../BD/productos.json";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";

export function ItemListContainer() {

  const CONTEXT = useContext(ShopContext);
  console.log(CONTEXT);
  
  const [listadoProductos, setListadoProductos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve(listaProductos);
      }, 1000);
    });

    if (id) {
      promesa.then(data => {
        const categoria = data.filter(producto => producto.categoriaId === id)
        setListadoProductos(categoria)
        console.log('hola yo soy la categoria:', id);
      })

    } else {
      promesa.then(data => {
        setListadoProductos(data);
        console.log('no hay categoría en especifico, traigo todos los productos');
      })
    }
  }, [id])

  return (
    <>
      <div>
        {
          listadoProductos.map(producto => {
            return (
              <>
                <Container>
                  <ItemComponent key={producto.id} img={producto.imagen} nombre={producto.nombre} descripcion={producto.descripcion} precio={producto.precio} id={producto.id} />
                </Container>
              </>
            )
          })
        }
      </div>
    </>
  )
}