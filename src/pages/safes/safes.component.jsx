import React from "react";
import "./safes.component.css";
// import Sidenav from "../../components/sideNav/sideNav.component";
// import banner from "../../assets/images/Banner_img.svg";
// import secretimg from "../../assets/images/img_secrets.svg";
// import addFolder from "../../assets/images/icon_addfolder_inactive.svg";
// import MainContent from "../../components/mainContent/mainContent.component";
// import arrowDownIcon from "../../assets/images/icon_arrow_white.svg";
// import asideBodyImg from "../../assets/images/Group 12687.svg";
// import searchIcon from "../../assets/images/icon_search.svg";
// // modal
// import Button from "../../components/formInputs/button/button";
// import ButtonImg from "../../assets/images/Group 12577.svg";
// import InputField from "../../components/formInputs/inputField/inputField";
// import TextArea from "../../components/formInputs/textArea/textArea";
// import SafeIcon from "../../assets/images/icon_safe.svg";

// import Modal from "../../components/modal/modal";
import { useSelector, useDispatch } from "react-redux";
import SafeSideNav from "./safeSideNav/safeSidenav";
import SafeMainContent from "./safeMainContent/safeMainContent";

function SafePage() {
  return (
    <div className="page-wrapper">
      <SafeSideNav />

      <SafeMainContent />
    </div>
  );
}

export default SafePage;
