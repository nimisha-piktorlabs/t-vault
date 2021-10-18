import React, { useState ,useEffect} from "react";
import "./safeMainContent.css";
import MainContent from "../../../components/mainContent/mainContent.component";
import IconFolder from "../../../assets/images/icon_folder.svg";
import secretimg from "../../../assets/images/img_secrets.svg";
import addFolder from "../../../assets/images/icon_addfolder_inactive.svg";
import Modal from "../../../components/modal/modal";
import SecretForm from "../safeForm/secretForm";
import { useSelector } from "react-redux";
import API from "../../../api"

function SafeMainContent() {
  const [showModal, setShowModal] = useState(false);
  const [reload, setReload] = useState(false);
  const activesafeid = useSelector((state) => state.activeSafe);
 
  const data = useSelector((state) => state.safe);

  const isSafe = data.length ? true : false;
  let secretData = [];
  // let safeName;
  // let ownerName;

  if (isSafe) {
    const [activeSafeData] = data.filter(
      (item, index) => index == activesafeid
    );

    secretData = activeSafeData ? activeSafeData.secret : [];
    // safeName = activeSafeData ? activeSafeData.safename : "";
    // ownerName = activeSafeData ? activeSafeData.owner : "";
  }

  // data.length && val.length();
  // secret  data printing api
    const [secrets, setSecrets] = useState(['']);
     const [safeName, setSafeName] = useState();
      const [ownerName, setOwnerName] = useState();
      
  console.log("reload val",reload);
   useEffect(() => {
    API.get(`/${activesafeid}`)
      .then(res => {
        const result = res.data;
        console.log("res",result)
        console.log("ownername",result.ownername)
        setSecrets(result.secrets); 
        setSafeName(result.safename); 
        setOwnerName(result.owner);   
      })
    
  },[activesafeid,reload]);

 let secretlen= secrets ? secrets.length : 0;
  
  const openModal = () => {
    if (safeName) setShowModal(true);
    setReload(false);
   
  };

  return (
    <MainContent>
      <div className="banner">
        {!safeName ? (
          <div className="text-centered">
            <span className="main-text">No Safes Created Yet</span>
            <br />
            <span className="sub-text">
              Create a Safe to see your secrets, folders and permissions here
            </span>
          </div>
        ) : (
          <div className="text-centered">
            <span className="main-text">Safe / {safeName}</span>
            <br />
            <span className="sub-text">{ownerName}</span>
          </div>
        )}
      </div>
      <div className="main-area">
        <div className="main-area-header">
          <div className="main-area-header-left">
            <span>Secrets</span>
          </div>
          <ul className="main-area-header-right">
            <li>
              <span>Add Folder</span>
              <img
                src={addFolder}
                alt="img"
                className="add-folder-icon"
                onClick={openModal}
              />
            </li>
          </ul>
        </div>
        <div className="main-area-body">
          {!secretlen && (
            <div className="container">
              <img src={secretimg} alt="" className="secretimg" />
              <div className="main-area-text">
                Add a <span className="text-style">Folder</span> and then you’ll
                be able to add <br />
                <span className="text-style">Secrets</span> to view them all
                here
              </div>
              <button className="add-button" onClick={openModal}>
                {" "}
                + Add
              </button>
            </div>
          )}
          {secretlen && (
          <div className="secret-container">
            <ul className="secret-ul">
              {secrets.map((secret, i) => {
                return (
                  <li className="list-secret active-li">
                    <img src={IconFolder} alt="" className="icon-folder" />
                    {secret}
                  </li>
                );
              })}
            </ul>
          </div>
          )}
          ;
        </div>
        {showModal && (
          <Modal>
            <div className="modal-header">
              <span className="modal-title">Add Folder</span>
            </div>
            <SecretForm closeModalHandler={() => setShowModal(false)} reloadSecret={ () => setReload(true)} />
          </Modal>
        )}
      </div>
    </MainContent>
  );
}

export default SafeMainContent;
