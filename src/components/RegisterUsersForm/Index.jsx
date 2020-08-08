import React, { Component } from "react";
import FormInput from "../Input/Index";


class RegisterUsersForm extends Component {
  constructor() {
    super();
    this.state = {
      name: " ",
      lastName: " ",
      secondLastname: " ",
      address: " ",
      phone: " ",
      mail: " "
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onChangeHandler(event) {
    let value = event.target.value;
    let inputName = event.target.name;
    console.log([inputName]);
    this.setState({ [inputName]: value });
    console.log(value);
  }

  onSubmitHandler() {
    let name = this.state.name;
    let lastName = this.state.lastName;
    let secondLastName = this.secondLastname;
    let address = this.state.address;
    let phone = this.state.phone;
    let mail = this.state.mail;

    let registerObject = {
      name,
      lastName,
      secondLastName,
      address,
      phone,
      mail
    };

    console.log(registerObject);
  }

  render() {
    return (
      <div className="form">
        <form className="register-users-form">
        <FormInput
          name="name"
          label="Nombre"
          type="text"
          description="text help"
          placeholder="Ej. Jorge"
          onChange={this.onChangeHandler}
          value={this.state.name}
        />
        <FormInput
          name="lastName"
          label="Apellido Paterno"
          type="text"
          description="text help"
          placeholder="Ej. Pérez"
          onChange={this.onChangeHandler}
          value={this.state.lastName}
        />
        <FormInput
          name="secondLastName"
          label="Apellido Materno"
          type="text"
          description="text help"
          placeholder="Ej. Cervantes"
          onChange={this.onChangeHandler}
          value={this.state.secondLastName}
        />
        <FormInput
          name="address"
          label="Dirección"
          type="text"
          description="text help"
          placeholder="Calle"
          onChange={this.onChangeHandler}
          value={this.state.address}
        />
        <FormInput
          name="address"
          type="text"
          description="text help"
          placeholder="No. Ext"
          onChange={this.onChangeHandler}
          value={this.state.address}
        />
        <FormInput
          name="address"
          type="text"
          description="text help"
          placeholder="No. Int"
          onChange={this.onChangeHandler}
          value={this.state.address}
        />
        <FormInput
          name="address"
          type="text"
          description="text help"
          placeholder="Colonia"
          onChange={this.onChangeHandler}
          value={this.state.address}
        />
        <FormInput
          name="address"
          type="text"
          description="text help"
          placeholder="Código Postal"
          onChange={this.onChangeHandler}
          value={this.state.address}
        />
        <FormInput
          name="address"
          type="text"
          description="text help"
          placeholder="Delegación"
          onChange={this.onChangeHandler}
          value={this.state.address}
        />
        <FormInput
          name="address"
          type="text"
          description="text help"
          placeholder="Ciudad/Estado"
          onChange={this.onChangeHandler}
          value={this.state.address}
        />
        <FormInput
          name="phone"
          label="Teléfono"
          type="tel"
          description="text help"
          placeholder="Ej. Celular: (55)555 5555"
          onChange={this.onChangeHandler}
          value={this.state.phone}
        />
        <FormInput
          name="email"
          label="Correo"
          type="email"
          description="email help"
          placeholder="Ej. arnesto@mail.ejemplo.com"
          onChange={this.onChangeHandler}
          value={this.state.email}
        />
        <FormInput
          type="submit"
          value="Registar"
          onClick={this.onSubmitHandler}
        />
        </form>
      </div>
    );
  }
}

export default RegisterUsersForm;
