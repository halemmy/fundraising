import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import background from "../images/background.jpeg";
import logo from "../logo.png";
import { Form, Button, Container, Row } from "react-bootstrap";
import { login } from "../redux/actions/auth.action";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const history = useHistory();

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }
  }, [history, isAuthenticated]);

  return (
    <div
      className="mx-auto maxwidth-100 p-5 no-repeat center center fixed"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Container className={"d-flex justify-content-center mx-auto"}>
        <Row>
          <Form
            className="justify-content-center"
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(login(email, password));
            }}
          >
            <img src={logo} className="pb-3" alt="logowhite"></img>
            <Form.Group className="form-title">
              <h2 className="text-light">Log in</h2>
              <Form.Text className="text-light"> Stay updated! </Form.Text>
            </Form.Group>

            <Form.Group className="email-input">
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleChangeEmail}
              />
            </Form.Group>

            <Form.Group className="password-input">
              <Form.Control
                type="password"
                value={password}
                onChange={handleChangePassword}
                placeholder="Password"
              />
              <Button className="my-2 text-light" variant="info" type="Login">
                Login
              </Button>
              <hr />
              <h5 className="text-light">New user?</h5>
              <a href="/register" className="text-light">
                Register
              </a>
            </Form.Group>
          </Form>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;
