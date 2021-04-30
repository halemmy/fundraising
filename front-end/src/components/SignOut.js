import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import LogOut from "../redux/actions/auth.action";

const SignOut = () => {
  const dispatch = useDispatch();
  const logOut = () => {
    localStorage.removeItem("Token");
    dispatch(LogOut);
  };

  return (
    <div>
      <Container>
        <Row>
          <Button
            variant="warning-outlined"
            className="text-danger"
            onClick={logOut}
          >
            Log out
          </Button>
        </Row>
      </Container>
    </div>
  );
};

export default SignOut;
