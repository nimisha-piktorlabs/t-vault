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
import { deleteSafe, getSecret } from "../../../redux/safe/actions";

function SafeSideNav() {
  const [CurrentValues, setCureentValues] = useState({});
  const [CurrentIndex, setCureentIndex] = useState();
  const [showModal, setShowModal] = useState(false);
  const [searchKey, setSearchKey] = useState("");
  const activesafeid = useSelector((state) => state.activeSafe);

  const dispatch = useDispatch();

  const openModalCreate = () => {
    setCureentValues({});
    setCureentIndex();
    setShowModal(true);
  };
  //---------search ------------------------------
  let data = useSelector((state) => state.safe);
  if (searchKey != "") {
    data = data.filter((data) => {
      return data.safename.search(searchKey) != -1;
    });

    if (data == "" && searchKey != "") {
      console.log("dataaa no", data);
    }
  }
  //---------search --------end ----------------------
  const isData = data.length ? true : false;

  const safeOnClickHandler = (i) => {
    dispatch(getSecret(i));
  };
  //.....................deltet handler ..................../
  const deleteHandler = (i) => {
    dispatch(deleteSafe(i));
  };
  //edit handler
  const editHandler = (i) => {
    const [val] = data.filter((item, index) => index == i);

    setCureentValues(val);
    setCureentIndex(i);
    setShowModal(true);

    //  dispatch(editSafe(i));
  };
  //---------search ------------------------------
  // const [filteredData, setFilteredData] = useState(data);
  const searchHandler = (e) => {
    let value = e.target.value.toLowerCase();
    setSearchKey(value);
  };

  // --------------------serch end -------------------

  //secret

  return (
    <Sidenav>
      <div className="aside-header">
        <div className="all-safe">
          <span>All Safes</span>

          <span className="all-safe-count">({data.length})</span>
          {/* <span className="arrow-icon">
            <img src={arrowDownIcon} alt="arrow" className="arrow-down-icon" />
          </span> */}
        </div>

        <div className="search-box">
          <div className="input-icon">
            <img src={searchIcon} alt="icon" className="search-icon" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="input-box"
            onChange={searchHandler}
          />
        </div>
      </div>
      <div className="aside-body">
        {isData && (
          <div className="list-container">
            <ul className="list-data-ul">
              {data.map((dat, i) => {
                let activeClass = activesafeid == i ? "active" : "";

                return (
                  <li
                    className={`list-data ${activeClass}`}
                    onClick={() => safeOnClickHandler(i)}
                  >
                    <div className="list-content">
                      <div className="list-content-left">
                        <img
                          src={IconSafe}
                          alt=""
                          srcset=""
                          className="iconsafe"
                        />
                        {dat.safename}
                      </div>

                      <div className="edit-delete-icon-container">
                        <img
                          src={EditIcon}
                          alt=""
                          srcset=""
                          className="edit-icon"
                          onClick={() => editHandler(i)}
                        />
                        <img
                          src={DeleteIcon}
                          alt=""
                          srcset=""
                          className="delete-icon"
                          onClick={() => deleteHandler(i)}
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
                onClick={openModalCreate}
              />
            </span>
          </div>
        )}
        {!isData && !searchKey && (
          <div className="display-list-empty">
            <div className="imgdiv">
              <div className="aside-body-img-container">
                <img src={asideBodyImg} alt="img" className="aside-body-img" />
                <span className="create-safe-text">
                  Create a Safe to get started!
                </span>
              </div>
              <span>
                <img
                  src={ButtonImg}
                  alt=""
                  srcset=""
                  className="button-img"
                  onClick={openModalCreate}
                />
              </span>
            </div>
          </div>
        )}
        {searchKey && !isData && (
          <div className="display-list-empty">
            <div className="imgdiv">
              <div className="aside-body-img-container">
                <img src={asideBodyImg} alt="img" className="aside-body-img" />
                <span className="no-data-found-text">No data found</span>
              </div>
              <span>
                <img
                  src={ButtonImg}
                  alt=""
                  srcset=""
                  className="button-img"
                  onClick={openModalCreate}
                />
              </span>
            </div>
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
                  A Safe is a logical unit to store the secrets. All the safes
                  are created within Vault. You can control access only at the
                  safe level. As a vault administrator you can manage safes but
                  cannot view the content of the safe.
                </span>
              </div>
            </div>
            <SafeForm
              closeModalHandler={() => setShowModal(false)}
              currentFormValue={CurrentValues}
              currentFormIndex={CurrentIndex}
            />
          </Modal>
        )}
      </div>
    </Sidenav>
  );
}

export default SafeSideNav;
