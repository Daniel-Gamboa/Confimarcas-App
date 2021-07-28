import { useState, useContext } from "react"
import { ShopContext } from "../../context/ShopContext" 

export const ItemCount = ({cantidadMinima, stock}) => {
    const { setQuantity } = useContext(ShopContext)
    const [contador, setContador] = useState(1)

    function disminucion() {
        if (contador > cantidadMinima) {
            setContador(contador-1)
        };
        if (contador === cantidadMinima)
        alert ('No se puede agregar menos de un producto')
    };

    function incremento() {
        if (contador < stock) {
            setContador(contador+1)
        };
        if (contador === stock)
        alert ('No tenemos mas unides disponibles de este producto')
    };
    
    const cantidad = contador;
    setQuantity(cantidad);

    return(
        <>
        <section>
            <button onClick={() =>{disminucion()}}>-</button>
            {contador}
            <button onClick={() =>{incremento()}}>+</button>
        </section>
        </>
    )
}

