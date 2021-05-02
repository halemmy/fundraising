import React from "react";
import { Navbar, Nav, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../logo.png";

// import SignOut from "./SignOut";

const PublicNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" className="justify-content-space-between">
      <Col>
        <Navbar.Brand href="/">
          <img src={logo} alt="logo"></img>
        </Navbar.Brand>
      </Col>

      <Col>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} to="/">
              Trang chủ
            </Nav.Link>
            {/* <Nav.Link as={NavLink} to="/account">
                Tài khoản
              </Nav.Link>
              <SignOut /> */}
          </Nav>
        </Navbar.Collapse>
      </Col>
    </Navbar>
  );
};

export default PublicNavbar;
