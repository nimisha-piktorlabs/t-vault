import React, { useState ,useEffect} from "react";
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
import API from "../../../api"

function SafeSideNav() {
  const [CurrentValues, setCureentValues] = useState({});
  const [CurrentIndex, setCureentIndex] = useState();
  const [showModal, setShowModal] = useState(false);
  const [searchKey, setSearchKey] = useState("");
  const activesafeid = useSelector((state) => state.activeSafe);
  const [data,setData] =useState([]);

  const dispatch = useDispatch();

  const openModalCreate = () => {
    setCureentValues({});
    setCureentIndex();
    setShowModal(true);
  };
  // api for get all safe 
  useEffect(() => {
    API.get(``)
      .then(res => {
        const result = res.data;
        // console.log("result",result);
        setData(result);     
      })
    
  },[]);
  //---------search ------------------------------
  let filteredData=data;
  // let data = useSelector((state) => state.safe);
  if (searchKey != "") {
   filteredData = filteredData.filter((data) => {
      return data.safename.search(searchKey) != -1;
    });

    if (filteredData == [] && searchKey != "") {
      console.log("dataaa no", data);
    }
  }
  //---------search --------end ----------------------
  const isData = filteredData.length ? true : false;
  

  const safeOnClickHandler = (i) => {
    console.log("safeid",i);
    dispatch(getSecret(i));
  };
  //.....................deltet handler ..................../
  const deleteHandler = (i) => {
    // dispatch(deleteSafe(i));
    // dispatch(getSecret(0));
    API.delete(`/${i}`)
      .then(res => {
        console.log("delete res",res);
        console.log("delete res.data",res.data);
      })
       .catch(error => {
    console.log(error.response)
      });
  };
  //edit handler
  const editHandler = (i) => {
    console.log("edit",i);
    const [val] = data.filter((item, index) => index == i);

    API.get(`/${i}`)
      .then(res => {
        console.log("edit res",res);
        console.log("edit res.data",res.data);
        setCureentValues(res.data);
        console.log("val..",val);
        setCureentIndex(i);
         setShowModal(true);
      })
       .catch(error => {
    console.log(error.response)
      });

    // setCureentValues(val);
    // setCureentIndex(i);
   

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
              {filteredData.map((dat, i) => {
                let activeClass = activesafeid == dat._id ? "active" : "";

                return (
                  <li
                    className={`list-data ${activeClass}`}
                    onClick={() => safeOnClickHandler(dat._id)}
                  >
                    <div className="list-content">
                      <div className="list-content-left">
                        <img
                          src={IconSafe}
                          alt=""
                         
                          className="iconsafe"
                        />
                        {dat.safename}
                      </div>

                      <div className="edit-delete-icon-container">
                        <img
                          src={EditIcon}
                          alt=""
                          srcSet=""
                          className="edit-icon"
                          onClick={() => editHandler(dat._id)}
                        />
                        <img
                          src={DeleteIcon}
                          alt=""
                          srcSet=""
                          className="delete-icon"
                          onClick={() => deleteHandler(dat._id)}
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
                srcSet=""
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
                  srcSet=""
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
                {/* <img src={asideBodyImg} alt="img" className="aside-body-img" /> */}
                <span className="no-data-found-text">No data found</span>
              </div>
              <span>
                {/* <img
                  src={ButtonImg}
                  alt=""
                  srcset=""
                  className="button-img"
                  onClick={openModalCreate}
                /> */}
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
