import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import logo from "../images/logo1.png";

const Footer = () => {
  return (
    <div className="bg-light mx-auto">
      <Container className="">
        <Row>
          <Col
            sm="6"
            className="d-flex flex-column justify-content-center align-items-start py-5"
          >
            <Image src={logo} rounded alt="logo" className="mb-3" />
            <h6 className="">
              Địa chỉ: 33 Cao Đức Lân, An Phú, Quận 2, TP. Hồ Chí Minh
            </h6>
            <h6 className=""> Hotline: 0989123456 </h6>
            <h6 className="">Email: fund4good@gmail.com</h6>
          </Col>

          <Col
            sm="3"
            className="d-flex flex-column justify-content-center align-items-start py-5"
          >
            <h2 className="">This is Col 2</h2>
            <Row>Row1</Row>
            <Row>Row2</Row>
            <Row>Row3</Row>
          </Col>
          <Col
            sm="3"
            className="d-flex flex-column justify-content-center align-items-start py-5"
          >
            <h2 className="">This is Col 3</h2>
            <Row>Row1</Row>
            <Row>Row2</Row>
            <Row>Row3</Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
