import { useEffect } from "react";
import { useState } from "react";
import { ItemComponent } from "./components/Item";
import ItemCount from './components/ItemCount'

function ItemListContainer() {
    const [listadoProductos, setListadoProductos] = useState([]);

    useEffect(() => {
        async function obtenerDataMercadoLibre(){
            const response = await fetch("https://api.mercadolibre.com/sites/MLC/search?q=gomas%20dulces");
            const data = await response.json();
            setListadoProductos(data.results);
        }

        obtenerDataMercadoLibre();
    }, []);

    console.log(listadoProductos);

    return (                                                                                        
        <>
            <div>
                {                
                    listadoProductos.map(producto => {
                        return (
                            <ItemComponent key={producto.id} nombre={producto.title} precio={producto.price} img={producto.thumbnail} />
                        )}
                    )
                }

                <ItemCount />
            </div>
        </>
    )
}

export default ItemListContainer;