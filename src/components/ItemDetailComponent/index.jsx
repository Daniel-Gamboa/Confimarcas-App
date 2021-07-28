import './style.css';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ItemCount } from "../../components/ItemCount";
import { Typography } from '@material-ui/core';
import { useContext } from 'react';
import { Button } from "react-bootstrap";
import { Link } from  'react-router-dom'
import { ShopContext } from '../../context/ShopContext';

export function ItemDetailComponent({ img, nombre, descripcion, precio, stock, id }) {
  const { onAdd, addToCart, isAdded, quantity } = useContext(ShopContext)

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

            {addToCart ? "": <ItemCount cantidadMinima={1} stock={stock}/>}

            {isAdded ? <Button onClick={onAdd} variant="outline-primary"><Link to={"/cart"}>Terminar la compra</Link></Button> : <Button onClick={() => { onAdd(id, quantity, [{ "item": nombre, "cantidad": quantity, "id": id, "precio": precio }]) }} variant="outline-primary">Agregar al carrito</Button>}
          </Col>
        </Row>
      </Container>
    </>
  )
};