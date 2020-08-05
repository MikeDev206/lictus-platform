import React from "react";
import { Container, Row, Col } from "reactstrap";

import LoginForm from "../../components/LoginForm/Index";
import LoginImg from "../../components/LoginImg/Index";

function Login() {
  return (
    <Container>
      <Row>
        <Col xs="12" md="6" lg="6">
          <LoginForm />
        </Col>
        <Col xs="12" md="6" lg="6">
          <LoginImg />
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
