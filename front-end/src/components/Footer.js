import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import logo from "../images/logo1.png";

const Footer = () => {
  return (
    <div className="bg-light mx-auto">
      <Container className="">
        <Row>
          <Col className="d-flex flex-column align-items-start py-5">
            <Image src={logo} rounded alt="logo" className="mb-3" />
            <h6>Địa chỉ: 33 Cao Đức Lân, An Phú, Quận 2, TP. Hồ Chí Minh</h6>
            <h6> Hotline: 0989123456 </h6>
            <h6>Email: fund4good@gmail.com</h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
