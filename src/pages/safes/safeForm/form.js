import React, { useState } from "react";
import InputField from "../../../components/formInputs/inputField/inputField";
import TextArea from "../../../components/formInputs/textArea/textArea";
import Button from "../../../components/formInputs/button/button";
import { useSelector, useDispatch } from "react-redux";
import { createSafe, updateSafe } from "../../../redux/safe/actions";
function SafeForm({ closeModalHandler, currentFormValue, currentFormIndex }) {
  const [inputSafeName, setInputSafeName] = useState("");
  //val fun

  const [inputValues, setInputValues] = useState(currentFormValue);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (inputValues.description.length < 10) {
      alert("Enter more characters");
    } else {
      if (currentFormIndex != undefined) {
        // console.log("updated input", inputValues);
        dispatch(updateSafe({ index: currentFormIndex, values: inputValues }));
      } else {
        dispatch(createSafe(inputValues));
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
      <label for="type">Type</label>

      <select
        className="select-type"
        id="type"
        name="selectType"
        onChange={(e) =>
          setInputValues({ ...inputValues, [e.target.name]: e.target.value })
        }
      >
        <option value="Personal" selected>
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
