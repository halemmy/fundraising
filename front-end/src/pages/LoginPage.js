import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import background from "../images/background.jpeg";
import logo from "../images/logo.png";
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
      className="bg no-repeat py-5 center center fixed cover"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Container className={"d-flex justify-content-center mx-auto py-5"}>
        <Row className=" mx-5">
          <Form
            className="m-5 justify-content-center"
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(login(email, password));
            }}
          >
            <img src={logo} className="pt-5 pb-5" alt="logowhite"></img>

            <Form.Group className="form-title">
              <h2 className="text-light">Đăng nhập</h2>
              <p className="text-light pb-2">
                Chào mừng bạn quay trở lại! Hãy xem những cập nhật mới và tham
                gia đóng góp cho các dự án xã hội ngay hôm nay!
              </p>
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
                placeholder="Mật khẩu"
              />

              <Button
                className="m-3 p-2 text-light"
                variant="info"
                type="Login"
              >
                Đăng nhập
              </Button>

              <hr />
              <h5 className="text-light pt-5">Bạn chưa có tài khoản?</h5>
              <a href="/register" className="text-light pb-5">
                Đăng ký
              </a>
            </Form.Group>
          </Form>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;
