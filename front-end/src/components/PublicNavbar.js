import React from "react";
import { Navbar, Nav, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../images/logo2.png";

// import SignOut from "./SignOut";

const PublicNavbar = () => {
  return (
    <Navbar bg="light" expand="sm" className="justify-content-space-between">
      <Col>
        <Navbar.Brand href="/">
          <img src={logo} rounded alt="logo"></img>
        </Navbar.Brand>
      </Col>

      <Col>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} to="/campaigns">
              Chiến dịch
            </Nav.Link>

            <Nav.Link as={NavLink} to="/about">
              Giới thiệu
            </Nav.Link>

            <Nav.Link as={NavLink} to="/login">
              Đăng nhập
            </Nav.Link>

            <Nav.Link as={NavLink} to="/register">
              Đăng ký
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Col>
    </Navbar>
  );
};

export default PublicNavbar;
