import React from "react";
import "./inputField.css";
function InputField({
  type,
  modal_inputfield_cls,
  placeholder,
  name,
  onChangeHandler,
}) {
  return (
    <input
      type={type}
      className={`${modal_inputfield_cls}`}
      placeholder={placeholder}
      onChange={onChangeHandler}
      name={name}
    />
  );
}

export default InputField;
