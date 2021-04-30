import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../logo.png";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Container, Row } from "react-bootstrap";
import { register } from "../redux/actions/register.action";
import { useHistory } from "react-router-dom";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const isCreated = useSelector((state) => state.register.isCreated);
  const history = useHistory();

  useEffect(() => {
    if (isCreated) {
      history.push("/login");
    }
  }, [history, isCreated]);

  return (
    <div className="mx-auto p-5 no-repeat center center fixed">
      <Container className={"d-flex justify-content-center mx-auto"}>
        <Row>
          <Form
            className="justify-content-center"
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(register(name, email, password));
            }}
          >
            <img src={logo} alt="logo" className="pb-3" />

            <Form.Group>
              <h2 className="text-light">Register</h2>
              <Form.Text className="text-light">
                Come for what you love. Stay for what you discover.
              </Form.Text>
            </Form.Group>

            <Form.Group>
              <Row className="p-2">
                <Form.Control
                  type="name"
                  value={name}
                  placeholder="Name (Required)"
                  onChange={handleChangeName}
                ></Form.Control>
              </Row>

              <Row className="p-2">
                <Form.Control
                  type="email"
                  value={email}
                  placeholder="Email (Required)"
                  onChange={handleChangeEmail}
                ></Form.Control>
              </Row>

              <Row className="p-2">
                <Form.Control
                  type="password"
                  value={password}
                  placeholder="New Password (Required)"
                  onChange={handleChangePassword}
                ></Form.Control>
                <Form.Text id="passwordHelpBlock" class="text-white">
                  Must be 8-20 characters long.
                </Form.Text>
              </Row>

              <Row className="p-2">
                <Form.Text className="text-light">
                  By clicking Agree & Join, you agree to the User Agreement,
                  Privacy Policy, and Cookie Policy.
                </Form.Text>
                <Button
                  className="mb-2 mt-2 text-dark"
                  variant="warning"
                  type="Register"
                >
                  Agree & Join
                </Button>
              </Row>
            </Form.Group>

            <hr />
            <h4 className="text-light">Already haved an account?</h4>
            <a href="/login" className="text-light">
              Log In
            </a>
          </Form>
        </Row>
      </Container>
    </div>
  );
};

export default RegisterPage;
