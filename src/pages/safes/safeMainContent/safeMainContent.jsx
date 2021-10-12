import React, { useState } from "react";
import "./safeMainContent.css";
import MainContent from "../../../components/mainContent/mainContent.component";
import IconFolder from "../../../assets/images/icon_folder.svg";
import secretimg from "../../../assets/images/img_secrets.svg";
import addFolder from "../../../assets/images/icon_addfolder_inactive.svg";
import Modal from "../../../components/modal/modal";
import SecretForm from "../safeForm/secretForm";
import { useSelector } from "react-redux";

function SafeMainContent() {
  const [showModal, setShowModal] = useState(false);
  const activesafeid = useSelector((state) => state.activeSafe);
  const data = useSelector((state) => state.safe);

  const isSafe = data.length ? true : false;
  let secretData = [];
  if (isSafe) {
    const [activeSafeData] = data.filter(
      (item, index) => index == activesafeid
    );

    secretData = activeSafeData ? activeSafeData.secret : [];
  }

  // data.length && val.length();

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <MainContent>
      <div className="banner">
        {/* <img src={banner} alt="banner" className="banner-img" /> */}
        <div className="text-centered">
          <span className="main-text">No Safes Created Yet</span>
          <br />
          <span className="sub-text">
            Create a Safe to see your secrets, folders and permissions here
          </span>
        </div>
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
          {!secretData.length && (
            <div className="container">
              <img src={secretimg} alt="" className="secretimg" />
              <div className="main-area-text">
                Add a <span className="text-style">Folder</span> and then you’ll
                be able to add <br />
                <span className="text-style">Secrets</span> to view them all
                here
              </div>
              <button className="add-button"> + Add</button>
            </div>
          )}
          <div className="secret-container">
            <ul className="secret-ul">
              {secretData.map((secret, i) => {
                return (
                  <li className="list-secret active-li">
                    <img src={IconFolder} alt="" className="icon-folder" />
                    {secret}
                  </li>
                );
              })}
            </ul>
          </div>
          ;
        </div>
        {showModal && (
          <Modal>
            <SecretForm closeModalHandler={() => setShowModal(false)} />
          </Modal>
        )}
      </div>
    </MainContent>
  );
}

export default SafeMainContent;
