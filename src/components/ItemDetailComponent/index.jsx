import './style.css';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ItemCount } from "../../components/ItemCount";
import { Typography } from '@material-ui/core';
import { useState } from 'react';
import { Link } from  'react-router-dom'

export function ItemDetailComponent({ img, nombre, descripcion, precio, stock }) {
  const [carrito, setCarrito] = useState([])
  const [isAdded, setIsAdded] = useState(false)
  function onAdd (producto){
    setCarrito(...carrito, producto)
    setIsAdded(true)
  }
  return (
    <>
      <Container>
      <Row>
          <Col>
            <Image src={img} rounded className="imgProducto" />
          </Col>
          <Col>
            <Typography>
              <h4>{nombre}</h4>
              <h5>$ {precio}</h5>
              <h5>{descripcion}</h5>
              <h5>Stock: {stock} </h5>
            </Typography>
            {isAdded ? <Link to
            ={'/cart'}> <button>Terminar mi compra</button></Link>:
            <ItemCount onAdd={onAdd}/>
            }
          </Col>
        </Row>
      </Container>
    </>
  )
};