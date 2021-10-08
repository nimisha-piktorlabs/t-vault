import React from "react";
import "./sideNav.component.css";
import arrowDownIcon from "../../assets/images/Group 12687.svg";
import asideBodyImg from "../../assets/images/Group 12687.svg";
function Sidenav(props) {
  return <aside className="aside">{props.children}</aside>;
}

export default Sidenav;
