import React from "react";
import "./inputField.css";
function InputField({ type, modal_inputfield_cls, placeholder, label }) {
  return (
    <input
      type={type}
      className={`${modal_inputfield_cls}`}
      placeholder={placeholder}
    />
  );
}

export default InputField;
