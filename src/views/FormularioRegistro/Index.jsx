// dependencies
import React, { Component } from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Col, Row, Container } from "reactstrap";

// components
import NavigationBar from "../../components/NavigationBar/Index";
import SideDrawer from "../../components/SideDrawer/Index";
import Backdrop from "../../components/Backdrop/Index";
import RegisterUsersForm from "../../components/RegisterUsersForm/Index";


class FormularioRegistro extends Component {
  state = {
    sideDrawerOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState((prevSate) => {
      return { sideDrawerOpen: !prevSate.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div className="wrapper-container">
        <NavigationBar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <div className="general-register-wrapper">
          <div className="register-wrapper">
            <Container>
              <Row>
                <Col xs={12}>
                  <Avatar size={164} icon={<UserOutlined />} />
                </Col>
                <Col xs={12}>
                  <RegisterUsersForm />
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

export default FormularioRegistro;
