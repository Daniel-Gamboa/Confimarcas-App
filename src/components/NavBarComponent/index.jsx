import {CartWidget} from '../CartWidget';
import './style.css';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

export const NavBarComponent = ({cart}) => {

  
    return (
       <>
       <div>
			<CartWidget/>
        </div>
        
        <Nav className="justify-content-center">
              <Nav.Item>
                <Nav.Link>
                  <Link to={'/'}>HOME</Link>
                </Nav.Link>
              </Nav.Item>

              <Nav.Link>
                <Link to={'/category/fiambreras'}>FIAMBRERAS</Link>
              </Nav.Link>

              <Nav.Item>
                <Nav.Link>
                  <Link to={'/category/expositores'}>EXPOSITORES</Link>
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link to={'/category/tarrinas'}>TARRINAS</Link>
                </Nav.Link>
              </Nav.Item>
            </Nav>
     </>       
    );
}

export default NavBarComponent;