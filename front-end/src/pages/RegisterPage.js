import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../images/logo.png";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Container, Row } from "react-bootstrap";
import { register } from "../redux/actions/register.action";
import { useHistory } from "react-router-dom";
import background from "../images/background.jpeg";

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
              <h2 className="text-light">Đăng ký tài khoản</h2>
              <p className="text-light">
                "Hãy trở thành sự thay đổi mà bạn muốn nhìn thấy ở thế giới này"
                - Mahatma Gandhi
              </p>
            </Form.Group>

            <Form.Group>
              <Row className="p-3 justify-content-center">
                <Form.Control
                  className="mx-5"
                  type="name"
                  value={name}
                  placeholder="Họ tên (*)"
                  onChange={handleChangeName}
                ></Form.Control>
                <Form.Text className="pb-3 text-mute">
                  Chúng tôi sẽ sử dụng tên này trong các "Biên bản xác nhận tài
                  trợ".
                </Form.Text>

                <Form.Control
                  className="mx-5"
                  type="email"
                  value={email}
                  placeholder="Email (*)"
                  onChange={handleChangeEmail}
                ></Form.Control>
                <Form.Text className="pb-3 text-dark">
                  Báo cáo tiến độ cùng những câp nhật mới sẽ được gửi đến email
                  này.
                </Form.Text>

                <Form.Control
                  className="mx-5"
                  type="password"
                  value={password}
                  placeholder="Mật khẩu (*)"
                  onChange={handleChangePassword}
                ></Form.Control>
                <Form.Text className="pb-3">
                  Mật khẩu phải có từ 8 ký tự trở lên.
                </Form.Text>

                <Form.Text className="text-light mx-5 pb-2">
                  Bằng việc bấm vào nút "Đồng ý và tham gia", bạn sẽ đồng ý các
                  Điều khoản dành cho người sử dụng, Chính sách bảo mật dữ liệu
                  và Chính sách sử dụng cookie tại đây.
                </Form.Text>
                <Button
                  className="m-2 text-dark"
                  variant="warning"
                  type="Register"
                >
                  Đồng ý và tham gia!
                </Button>
              </Row>
            </Form.Group>

            <hr />
            <h4 className="text-light">Bạn đã có tài khoản?</h4>
            <a href="/login" className="text-light">
              Đăng nhập{" "}
            </a>
          </Form>
        </Row>
      </Container>
    </div>
  );
};

export default RegisterPage;
