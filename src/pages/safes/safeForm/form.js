import React, { useState } from "react";
import InputField from "../../../components/formInputs/inputField/inputField";
import TextArea from "../../../components/formInputs/textArea/textArea";
import Button from "../../../components/formInputs/button/button";
import { useSelector, useDispatch } from "react-redux";
import { createSafe } from "../../../redux/safe/actions";
function SafeForm({ closeModalHandler }) {
  const [inputSafeName, setInputSafeName] = useState("");
  const [inputValues, setInputValues] = useState({});
  const dispatch = useDispatch();

  const data = useSelector((state) => state.safe);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(inputValues);
    dispatch(createSafe(inputValues));

    console.log("You clicked submit.");
    console.log(data);
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
        <option value="Personal">Personal</option>
        <option value="Official">Official</option>

        <option value=" " selected></option>
      </select>

      {/* select end  */}
      <label htmlFor="text-area"> Description</label>
      <TextArea
        modal_textarea="modaltextarea"
        placeholder="Description"
        name="description"
        onChangeHandler={(e) =>
          setInputValues({ ...inputValues, [e.target.name]: e.target.value })
        }
      />
      <span className="modal-bottom-text">
        Please add a minimum of 10 characters
      </span>
      <div className="btn-div">
        <span className="cancel-btn" onClick={closeModalHandler}>
          Cancel
        </span>
        <Button modal_create_btn="create-btn" data=" + Create" />
      </div>
    </form>
  );
}

export default SafeForm;
