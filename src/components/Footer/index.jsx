import './style.css';
import enviado from "./enviado.png";
import whatsapp from "./whatsapp.png";
import { Col, Row } from "react-bootstrap";

export function FooterComponent() {
  return (
    <>
      <Row className="footer">

        <Col>
          <div className="text-center">
            <h6 className="mt-3"> <strong> Contactanos </strong> </h6>
            <p className="w-100 text-center"><small>¡Envianos un mensaje!</small></p>
            <a href='http://wa.link/mksrjv' target="blank">
              <img src={whatsapp} height="30"alt="whatsapp" /></a>
          </div>
        </Col>

        <Col className="text-center">
          <h6 className="mt-3"> <strong> Envios </strong></h6>
          <img src={enviado} height="80"alt="truck" />
          <h6 >Realizamos entregas en todo Bogotá</h6>
        </Col>

        <div >
        <p className="text-center mt-5"><small>COPYRIGHT © 2021. Confimarcas</small></p>
        </div>
      </Row>
    </>
  )
};
