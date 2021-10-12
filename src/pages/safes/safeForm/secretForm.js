import React, { useState } from "react";
import InputField from "../../../components/formInputs/inputField/inputField";
import Button from "../../../components/formInputs/button/button";
import { useSelector, useDispatch } from "react-redux";
import { createSecret } from "../../../redux/safe/actions";

function SecretForm({ closeModalHandler }) {
  const [inputSecret, setInputSecret] = useState();
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e);
    dispatch(createSecret({ secretData: inputSecret, index: 1 }));

    closeModalHandler();
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <label htmlFor="input-field"> Safe Name</label>
        <InputField
          modal_inputfield_cls="modalinput"
          type="text"
          placeholder="safe name"
          label="Name"
          name="secret"
          value={inputSecret}
          onChangeHandler={(e) => setInputSecret(e.target.value)}
        />
      </div>
      <div className="btn-div">
        <Button modal_create_btn="create-btn" data=" + Create" />
      </div>
    </form>
  );
}

export default SecretForm;
