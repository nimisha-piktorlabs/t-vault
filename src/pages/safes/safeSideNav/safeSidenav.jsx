import React from "react";
import "./safeSideNav.css";
import Sidenav from "../../../components/sideNav/sideNav.component";
import arrowDownIcon from "../../../assets/images/icon_arrow_white.svg";
import asideBodyImg from "../../../assets/images/Group 12687.svg";
import searchIcon from "../../../assets/images/icon_search.svg";
// modal
import Button from "../../../components/formInputs/button/button";

import ButtonImg from "../../../assets/images/Group 12577.svg";
import InputField from "../../../components/formInputs/inputField/inputField";
import TextArea from "../../../components/formInputs/textArea/textArea";
import SafeIcon from "../../../assets/images/icon_safe.svg";

import Modal from "../../../components/modal/modal";
function SafeSideNav() {
  const openModal = () => {
    const modal = document.getElementById("myModal");
    modal.style.display = "block";
  };
  return (
    <Sidenav>
      <div className="aside-header">
        <span>All Safes</span>
        <span className="all-safe-count">(0)</span>
        <span className="arrow-icon">
          <img src={arrowDownIcon} alt="arrow" className="arrow-down-icon" />
        </span>
        <div className="search-box">
          <div className="input-icon">
            <img src={searchIcon} alt="icon" />
          </div>
          <input type="text" placeholder="Search" className="input-box" />
        </div>
      </div>
      <div className="aside-body">
        <div className="imgdiv">
          <img src={asideBodyImg} alt="img" className="aside-body-img" />
          <span className="create-safe-text">
            Create a Safe to get started!
          </span>
          <span>
            <img
              src={ButtonImg}
              alt=""
              srcset=""
              className="button-img"
              onClick={openModal}
            />
          </span>

          <Modal>
            <div className="modal-header">
              <span className="modal-title">Create Safe</span>
              <div className="header-content">
                <span className="safe-icon">
                  <img src={SafeIcon} alt="" />
                </span>
                <span className="modal-header-text">
                  A Safe is a logical unit to store the secrets. All the safes
                  are created within Vault. You can control access only at the
                  safe level. As a vault administrator you can manage safes but
                  cannot view the content of the safe.
                </span>
              </div>
            </div>
            <form>
              <div className="form-group">
                <label htmlFor="input-field"> Safe Name</label>
                <InputField
                  modal_inputfield_cls="modalinput"
                  type="text"
                  placeholder="safe name"
                  label="Name"
                />
              </div>

              <label htmlFor="input-field"> Owner</label>
              <InputField
                modal_inputfield_cls="modalinput"
                type="text"
                placeholder="owner"
                label="Name"
              />
              {/* select */}
              <label for="type">Type</label>

              <select className="select-type" id="type">
                <option value="Personal">Personal</option>
                <option value="Official">Official</option>

                <option value=" " selected></option>
              </select>

              {/* select end  */}
              <label htmlFor="text-area"> Description</label>
              <TextArea
                modal_textarea="modaltextarea"
                placeholder="Description"
              />
              <span className="modal-bottom-text">
                Please add a minimum of 10 characters
              </span>
              <div className="btn-div">
                <Button modal_create_btn="cancel-btn" data=" Cancel" />
                <Button modal_create_btn="create-btn" data=" + Create" />
              </div>
            </form>
          </Modal>
        </div>
      </div>
    </Sidenav>
  );
}

export default SafeSideNav;
