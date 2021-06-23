import './style.css';

function NavBar() {
    return (
        <nav className="navegacion navbar-expand-md navbar-light">
            <div className="container-fluid">
            <a className="navbar-brand" href="#">Confimarcas</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#opciones">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse justify-content-center" id="opciones">  
					<ul className="navbar-nav ">
						<li>
                        <a className="nav-link text-white" href="#">Quiénes Somos</a>
                        </li>
						<div className="btn-group">
							<li className="dropdown"><a href="#" className="nav-link text-white dropdown-toggle" data-toggle="dropdown">Cultura Organizacional</a>
								<ul className="dropdown-menu">
									<li >
                                    <a className="dropdown-item"href="#">Misión</a>
                                    </li>
									<li >
                                    <a className="dropdown-item"href="#">Visión</a>
                                    </li>
									<li >
                                    <a className="dropdown-item"href="#">Valores</a>
                                    </li>
								</ul>
							</li>
                        </div>
						<li>
                        <a className="nav-link text-white" href="#">Catálogo</a>
                        </li>
						<li>
                        <a className="nav-link text-white" href="#">Política de privacidad</a>
                        </li>
						<li>
                        <a className="nav-link text-white" href="#">Contáctenos</a></li>
                        
					</ul>
				</div>
                </div>
			</nav>
    );
}

export default NavBar;