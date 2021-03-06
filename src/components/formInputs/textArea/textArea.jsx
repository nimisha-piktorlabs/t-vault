import React from "react";
import "./textArea.css";
function TextArea({
  modal_textarea,
  placeholder,
  onChangeHandler,
  name,
  maxlength,
  value,
}) {
  return (
    <textarea
      id=""
      cols="50"
      rows="5"
      className={`${modal_textarea}`}
      placeholder={placeholder}
      onChange={onChangeHandler}
      name={name}
      value={value}
      maxlength={maxlength}
      required
    ></textarea>
  );
}

export default TextArea;
