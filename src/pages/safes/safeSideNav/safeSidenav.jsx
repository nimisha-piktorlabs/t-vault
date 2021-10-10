import React, { useState } from "react";
import "./safeSideNav.css";
import Sidenav from "../../../components/sideNav/sideNav.component";
import arrowDownIcon from "../../../assets/images/icon_arrow_white.svg";
import IconSafe from "../../../assets/images/icon_safe.svg";
import asideBodyImg from "../../../assets/images/Group 12687.svg";
import searchIcon from "../../../assets/images/icon_search.svg";
import DeleteIcon from "../../../assets/images/icon_delete_inactive.svg";
import EditIcon from "../../../assets/images/icon_edit_active.svg";
// modal

import ButtonImg from "../../../assets/images/Group 12577.svg";

import SafeIcon from "../../../assets/images/icon_safe.svg";

import Modal from "../../../components/modal/modal";
import SafeForm from "../safeForm/form";
import { useSelector, useDispatch } from "react-redux";
function SafeSideNav() {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const data = useSelector((state) => state.safe);
  console.log("data ", data);
  console.log("data len", data.length);
  const isData = data.length ? true : false;

  return (
    <Sidenav>
      <div className="aside-header">
        <div className="all-safe">
          <span>All Safes</span>

          <span className="all-safe-count">(0)</span>
          <span className="arrow-icon">
            <img src={arrowDownIcon} alt="arrow" className="arrow-down-icon" />
          </span>
        </div>

        <div className="search-box">
          <div className="input-icon">
            <img src={searchIcon} alt="icon" />
          </div>
          <input type="text" placeholder="Search" className="input-box" />
        </div>
      </div>
      <div className="aside-body">
        {isData && (
          <div className="list-container">
            <ul className="list-data-ul">
              {data.map((dat, i) => {
                return (
                  <li className="list-data">
                    <div className="list-content">
                      <div className="list-content-left">
                        <img
                          src={IconSafe}
                          alt=""
                          srcset=""
                          className="iconsafe"
                        />
                        {dat.safeName}
                      </div>

                      <div className="edit-delete-icon-container">
                        <img
                          src={EditIcon}
                          alt=""
                          srcset=""
                          className="edit-icon"
                        />
                        <img
                          src={DeleteIcon}
                          alt=""
                          srcset=""
                          className="delete-icon"
                        />
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            <span>
              <img
                src={ButtonImg}
                alt=""
                srcset=""
                className="button-img-list"
                onClick={openModal}
              />
            </span>
          </div>
        )}
        <div className="display-list-empty">
          <div className="imgdiv">
            {!isData && (
              <div className="aside-body-img-container">
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
              </div>
            )}
            {/* if stattemenet */}
            {showModal && (
              <Modal>
                <div className="modal-header">
                  <span className="modal-title">Create Safe</span>
                  <div className="header-content">
                    <span className="safe-icon">
                      <img src={SafeIcon} alt="" />
                    </span>
                    <span className="modal-header-text">
                      A Safe is a logical unit to store the secrets. All the
                      safes are created within Vault. You can control access
                      only at the safe level. As a vault administrator you can
                      manage safes but cannot view the content of the safe.
                    </span>
                  </div>
                </div>
                <SafeForm closeModalHandler={() => setShowModal(false)} />
              </Modal>
            )}
          </div>
        </div>
      </div>
    </Sidenav>
  );
}

export default SafeSideNav;
