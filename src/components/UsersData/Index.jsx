import React, { Component } from "react";
import avatar from "../../assets/SVG/Icons/avatar-icon.svg";
// import { Avatar } from "antd";
// import { UserOutlined } from "@ant-design/icons";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  // Button,
} from "reactstrap";

class UsersData extends Component {
  render() {
    return (
      <div className="status-wrapper">
        <div className="users-data-wrapper">
          {/* <Avatar size={150} icon={<UserOutlined />} /> */}
          <div>
            <Card>
              <CardImg
                top
                width="100%"
                src={avatar}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Jorge Perez</CardTitle>
                <CardSubtitle>Gestor</CardSubtitle>
                <CardText>Telefono <br/> 551-234-5678</CardText>
                <CardText>Contacto <br/> juan@lictus.mx</CardText>
                <CardText>Empresa <br/> Lictus</CardText>
                <CardText>Desde <br/> 12/04/2001</CardText>
                <CardText>Estatus <br/> ¡Estás al día con tus procesos!</CardText>
                
                {/* <Button>Button</Button> */}
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default UsersData;
