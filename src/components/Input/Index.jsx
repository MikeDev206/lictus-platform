import React, { Component } from "react";

class FormInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: " ",
    };
  }
  onChange(event) {
    const { value } = event.target;

    this.setState({ value });
  }

  render() {
    return (
      <div className="form-group">
        <label htmlFor={this.props.id}>
          {this.props.label}
        </label>
        <input
          id={this.props.id}
          name="user"
          type={this.props.type}
          aria-describedby={this.props.description}
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}

export default FormInput;

// const Input = ({ attribute, changeHandler, param }) => {
//   return (
//     <div>
//       <input
//         id={attribute.id}
//         name={attribute.name}
//         type={attribute.type}
//         placeholder={attribute.placeholder}
//         onChange={(event) =>
//           changeHandler(event.target.name, event.target.value)
//         }
//         className="regular-style"
//       />
//     </div>
//   );
// };

// export default Input;
