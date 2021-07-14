import './style.css';
import {Link} from 'react-router-dom'

export const CartWidget = () => {
    return(
        <>
        <Link to= {`/`}><img src="/imagenes/logosin.png" id="logo"/></Link>
        </>
    )
}

export default CartWidget