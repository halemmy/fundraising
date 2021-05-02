import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../images/logo3.png";
import background from "../images/background.jpeg";

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
    <div
      className="bg no-repeat center center fixed cover"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Container className={"d-flex mx-auto"}>
        <Row className="mx-5 px-5">
          <Form
            className="m-5 p-5 justify-content-center"
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(register(name, email, password));
            }}
          >
            <img src={logo} alt="logo" className="p-5" />

            <Form.Group>
              <h2 className="text-light">Đăng ký</h2>
              <p className="text-light">
                "Hãy trở thành sự thay đổi mà bạn muốn nhìn thấy ở thế giới này"
                - Mahatma Gandhi
              </p>
            </Form.Group>

            <Form.Group>
              <Row className="p-3 justify-content-center">
                <Form.Control
                  className="mx-5 my-2 pb-2"
                  type="name"
                  value={name}
                  placeholder="Họ tên (*)"
                  onChange={handleChangeName}
                ></Form.Control>

                <Form.Control
                  className="mx-5 my-2 pb-2"
                  type="email"
                  value={email}
                  placeholder="Email (*)"
                  onChange={handleChangeEmail}
                ></Form.Control>

                <Form.Control
                  className="mx-5 my-2 pb-2"
                  type="password"
                  value={password}
                  placeholder="Mật khẩu (*) phải có từ 8 ký tự trở lên."
                  onChange={handleChangePassword}
                ></Form.Control>

                <p className="text-light mx-5 my-2 py-3">
                  Bằng việc bấm vào nút "Đồng ý và tham gia", bạn sẽ đồng ý các
                  Điều khoản dành cho người sử dụng, Chính sách bảo mật dữ liệu
                  và Chính sách sử dụng cookie tại đây.
                </p>

                <Button
                  className="m-2 text-light"
                  variant="info"
                  type="Register"
                >
                  Đồng ý và tham gia!
                </Button>
              </Row>
            </Form.Group>

            <hr />
            <div className="pb-5">
              <h4 className="text-light p-2">Bạn đã có tài khoản?</h4>
              <a href="/login" className="text-light">
                Đăng nhập
              </a>
              <hr />
              <a href="/" className="text-light pb-5">
                Về Trang Chủ
              </a>
            </div>
          </Form>
        </Row>
      </Container>
    </div>
  );
};

export default RegisterPage;
