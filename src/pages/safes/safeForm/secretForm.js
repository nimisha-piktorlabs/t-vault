import React, { useState } from "react";
import InputField from "../../../components/formInputs/inputField/inputField";
import Button from "../../../components/formInputs/button/button";
import { useSelector, useDispatch } from "react-redux";
import { createSecret } from "../../../redux/safe/actions";
import API from "../../../api";

function SecretForm({ closeModalHandler,reloadSecret }) {
  const activesafeid = useSelector((state) => state.activeSafe);
  const [inputSecret, setInputSecret] = useState();
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("input secrets",inputSecret);
    
       API.put(`/secret/${activesafeid}`, {secret:inputSecret} )
      .then(res => {    
         reloadSecret();
      })
      .catch(error => {
    console.log(error.response)
      });
    // dispatch(createSecret({ secretData: inputSecret, index: activesafeid }));
  
    closeModalHandler();
   
     
  };
  return ( 
    <form onSubmit={submitHandler}>
      <div className="form-group-secret">
        <label htmlFor="input-field"> Folder Name</label>
        <InputField
          modal_inputfield_cls="modalinput"
          type="text"
          placeholder="Folder name"
          label="Name"
          name="secret"
          value={inputSecret}
          onChangeHandler={(e) => setInputSecret(e.target.value)}
        />
      </div>
      <div className="btn-div">
        <div className="cancel-btn" onClick={closeModalHandler}>
          Cancel
        </div>
        <Button modal_create_btn="create-btn" data=" + Create" />
      </div>
    </form>
  );
}

export default SecretForm;
