import React from "react";

const Input = ({ attribute, changeHandler, param }) => {
  return (
    <div>
      <input
        id={attribute.id}
        name={attribute.name}
        type={attribute.type}
        placeholder={attribute.placeholder}
        onChange={(event) =>
          changeHandler(event.target.name, event.target.value)
        }
        className="regular-style"
      />
    </div>
  );
};

export default Input;