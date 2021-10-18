import React, { useState } from "react";
import InputField from "../../../components/formInputs/inputField/inputField";
import TextArea from "../../../components/formInputs/textArea/textArea";
import Button from "../../../components/formInputs/button/button";
import { useSelector, useDispatch } from "react-redux";
import { createSafe, updateSafe } from "../../../redux/safe/actions";
import axios from 'axios';
import API from "../../../api";




function SafeForm({ closeModalHandler, currentFormValue, currentFormIndex,reload }) {
  const [inputSafeName, setInputSafeName] = useState("");
  //val fun

  const [inputValues, setInputValues] = useState(currentFormValue);
  const dispatch = useDispatch();

  const submitHandler =  async (e) => {
    e.preventDefault();
    if (inputValues.description.length < 10) {
      alert("Enter more characters");
    } 

    else {
      if (currentFormIndex != undefined) {
        console.log("current form",currentFormIndex)
         console.log("current input val",inputValues)

        // dispatch(updateSafe({ index: currentFormIndex, values: inputValues }));
         API.patch(`/${currentFormIndex}`, inputValues )
      .then(res => {
        console.log("res",res);
        console.log("res.data",res.data);
        reload();
        
      })
      .catch(error => {
    console.log(error.response)
      });
      
      } else {
        // dispatch(createSafe(inputValues));
        
        API.post(``, inputValues )
      .then(res => {
        console.log("res",res);
        console.log("res.data",res.data);
         reload();
      })
      .catch(error => {
    console.log(error.response)
      });    

      }
     

      closeModalHandler();
    }
  };
  //   useDispatch(createSafe({ name: "safe1" }));
  //   console.log(data);
  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <label htmlFor="input-field"> Safe Name</label>
        <InputField
          modal_inputfield_cls="modalinput"
          type="text"
          placeholder="safe name"
          label="Name"
          name="safename"
          required
          value={inputValues.safename}
          onChangeHandler={(e) =>
            setInputValues({ ...inputValues, [e.target.name]: e.target.value })
          }
        />
      </div>

      <label htmlFor="input-field"> Owner</label>
      <InputField
        modal_inputfield_cls="modalinput"
        type="text"
        placeholder="owner"
        label="Name"
        name="owner"
        required
        value={inputValues.owner}
        onChangeHandler={(e) =>
          setInputValues({ ...inputValues, [e.target.name]: e.target.value })
        }
      />
      {/* select */}
      <label htmlFor="type">Type</label>

      <select
        className="select-type"
        id="type"
        name="selectType"
        onChange={(e) =>
          setInputValues({ ...inputValues, [e.target.name]: e.target.value })
        }
      >
        <option value="Personal" defaultValue="Personal">
          Personal
        </option>
        <option value="Official">Official</option>

        {/* <option value=" "></option> */}
      </select>

      {/* select end  */}
      <label htmlFor="text-area"> Description</label>
      <TextArea
        modal_textarea="modaltextarea"
        placeholder="Description"
        name="description"
        value={inputValues.description}
        onChangeHandler={(e) =>
          setInputValues({ ...inputValues, [e.target.name]: e.target.value })
        }
        required
      />
      <span className="modal-bottom-text">
        Please add a minimum of 10 characters
      </span>
      <div className="btn-div">
        <div className="cancel-btn" onClick={closeModalHandler}>
          Cancel
        </div>
        {currentFormIndex != undefined ? (
          <Button modal_create_btn="create-btn" data=" Update" />
        ) : (
          <Button modal_create_btn="create-btn" data=" + Create" />
        )}
      </div>
    </form>
  );
}

export default SafeForm;
