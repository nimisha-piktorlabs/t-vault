import React from "react";
import "./button.css";
function Button({ modal_create_btn, handleOnClick, data }) {
  return (
    <button className={`${modal_create_btn}`} onClick={handleOnClick}>
      {data}
    </button>
  );
}
export default Button;
