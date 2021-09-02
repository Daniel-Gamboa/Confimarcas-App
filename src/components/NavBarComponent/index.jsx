import './style.css';
import logoSin from '../.././logoSin.png';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Nav } from 'react-bootstrap';
import { CartWidgetComponent } from '../CartWidget';
import { CartContext } from '../../context/CartContext';

export function NavbarComponent() {
  const { totalItems } = useContext(CartContext);

  return (
    <>
      <Row className="navbar mb-3">
        <Col md="3">
          <Nav>
            <Nav.Item>
              <Link to={'/'}><img src={logoSin} height="120" alt="logo" /></Link>
            </Nav.Item>
          </Nav>
        </Col>

        <Col md="9">
          <Nav>
            <Nav.Item>
              <Nav.Link> <Link to={'/'} className="link">HOME</Link> </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link> <Link to={'/category/Almendras'} className="link">ALMENDRAS</Link> </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link> <Link to={'/category/Chocolates'} className="link">CHOCOLATES</Link ></Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link> <Link to={'/category/Gomas'} className="link">GOMAS</Link> </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link> <Link to={"/cart"}> <CartWidgetComponent /> {totalItems}</Link> </Nav.Link>
            </Nav.Item>
          
          </Nav>
        </Col>
      </Row>
    </>
  )
};