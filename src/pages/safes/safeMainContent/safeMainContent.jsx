import React from "react";
import MainContent from "../../../components/mainContent/mainContent.component";
import banner from "../../../assets/images/Banner_img.svg";
import secretimg from "../../../assets/images/img_secrets.svg";
import addFolder from "../../../assets/images/icon_addfolder_inactive.svg";
function SafeMainContent() {
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
              <img src={addFolder} alt="img" />
            </li>
          </ul>
        </div>
        <div className="main-area-body">
          <div className="container">
            <img src={secretimg} alt="" className="secretimg" />
            <div className="main-area-text">
              Add a <span className="text-style">Folder</span> and then you’ll
              be able to add <br />
              <span className="text-style">Secrets</span> to view them all here
            </div>
            <button className="add-button"> + Add</button>
          </div>
        </div>
      </div>
    </MainContent>
  );
}

export default SafeMainContent;
