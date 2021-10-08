import React from "react";
import "./mainContent.component.css";
import banner from "../../assets/images/Banner_img.svg";
import secretimg from "../../assets/images/img_secrets.svg";
import addFolder from "../../assets/images/icon_addfolder_inactive.svg";
function MainContent(props) {
  return <div className="main-content">{props.children}</div>;
}

export default MainContent;
