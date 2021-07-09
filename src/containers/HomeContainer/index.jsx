import  NavBarComponent from '../../components/NavBarComponent/';
import ItemListContainer from '../../ItemListContainer'; 


export const HomeContainer = () => {
    //fetch a la base de datos o ajax
    const carrito = []
    return (
        <div>
            <NavBarComponent cart={carrito}/>
            {/* <ItemListContainer greeting={'Hola, soy un greeting'}/> */}

        </div>
    )
}

export default HomeContainer 