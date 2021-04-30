import { React } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";
import { useSelector } from "react-redux";

import SignOut from "../components/SignOut";
import PublicNavbar from "../components/PaginationBar";

const AccountPage = () => {
  const userdata = useSelector((state) => state.auth.auth);

  return (
    <div className="mx-auto p-5">
      <PublicNavbar />

      <Container className="p-2">
        <Row className="p-3">
          <Col sm={6}>
            <h1>{userdata.user.name}</h1>
            <hr />
            <p>Email: {userdata.user.email}</p>
            <p>Create at: {userdata.user.createdAt}</p>
            <p>Update at: {userdata.user.updatedAt}</p>
            <p>ID number: {userdata.user._id}</p>
          </Col>

          <Col sm={6}>
            <img
              style={{ width: "250px" }}
              src={userdata.user.avatarUrl}
              alt="userAvatar"
            ></img>
          </Col>
        </Row>

        <SignOut />
      </Container>
    </div>
  );
};

export default AccountPage;
