import './style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import { CartWidget } from '../CartWidget';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export const NavBarComponent = () => {

  const { totalItems } = useContext(CartContext)

  
    return (
       <>
       <Container>
        <Row className="navbar">
       <Col md="3">
        <Nav>
          <Nav.Item>
          <Link to= {`/`}><img src="/imagenes/logosin.png" id="logo" alt="logo" /></Link>
          </Nav.Item>
        </Nav>
       </Col>
        
        <Col md="7">
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
            </Col>

            <Col md="2" >
            <Nav className="justify-content-left">
              <Link to={"/cart"}> <CartWidget /> {totalItems}</Link>
            </Nav>
          </Col>
          </Row>
          </Container>
     </>       
    );
}

export default NavBarComponent;