import { useState } from "react"


let stock = 10
let cantidadMinima = 1

export const ItemCount = ({onAdd}) => {
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
       
    return(
        <>
        <section>
            <button onClick={() =>{disminucion()}}>-</button>
            {contador}
            <button onClick={() =>{incremento()}}>+</button>
        </section>
        <section>
            <button onClick={()=> {onAdd({})
            }}>Agregar al Carrito</button>
        </section>
        </>
    )
}

export default ItemCount