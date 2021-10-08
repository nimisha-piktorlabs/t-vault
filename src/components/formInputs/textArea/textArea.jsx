import React from "react";
import "./textArea.css";
function TextArea({ modal_textarea, placeholder }) {
  return (
    <textarea
      id=""
      cols="50"
      rows="5"
      className={`${modal_textarea}`}
      placeholder={placeholder}
    ></textarea>
  );
}

export default TextArea;
