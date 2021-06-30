import {CartWidget} from '../CartWidgeth';
import './style.css';

export const NavBarComponent = ({cart}) => {
    return (
       <>
       <div>
			<CartWidget/>
        </div>
        <nav className="navegacion navbar-expand-md navbar-light">
            <div className="container-fluid">
            
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#opciones">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse justify-content-center" id="opciones">  
					<ul className="navbar-nav ">
						<li>
                        <a className="nav-link text-white" >Quiénes Somos</a>
                        </li>
						<div className="btn-group">
							<li className="dropdown"><a  className="nav-link text-white dropdown-toggle" data-toggle="dropdown">Cultura Organizacional</a>
								<ul className="dropdown-menu">
									<li >
                                    <a className="dropdown-item">Misión</a>
                                    </li>
									<li >
                                    <a className="dropdown-item">Visión</a>
                                    </li>
									<li >
                                    <a className="dropdown-item">Valores</a>
                                    </li>
								</ul>
							</li>
                        </div>
						<li>
                        <a className="nav-link text-white" >Catálogo</a>
                        </li>
						<li>
                        <a className="nav-link text-white" >Política de privacidad</a>
                        </li>
						<li>
                        <a className="nav-link text-white" >Contáctenos</a>
                        </li>
                        <li>
                        <a className="nav-link text-white" >Carrito - {cart.length}</a>
                        </li>
                        
					</ul>
				</div>
                </div>
			</nav>
     </>       
    );
}

export default NavBarComponent;