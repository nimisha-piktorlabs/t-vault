import React from "react";
import "./inputField.css";
function InputField({
  type,
  modal_inputfield_cls,
  placeholder,
  name,
  value,
  maxlength,
  onChangeHandler,
}) {
  return (
    <input
      type={type}
      className={`${modal_inputfield_cls}`}
      placeholder={placeholder}
      onChange={onChangeHandler}
      name={name}
      value={value}
      maxlength ={maxlength}
      required
    />
  );
}

export default InputField;
