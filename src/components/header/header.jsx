import React from "react";
import Logo from "../../assets/images/logo.png";
import "./header.css";
import { Link, useLocation } from "react-router-dom";
function Header() {
  const headerNav = [
    { text: "Safes", path: "/safes" },
    { text: "Vault AppRoles", path: "/vault" },
    { text: "Service Accounts", path: "/service" },

    { text: "IAM Service Accounts", path: "/iam" },
    { text: "Azure Active Directory", path: "/azure" },

    // "Service Accounts",
    // ,
    // "Azure Active Directory",
  ];
  const location = useLocation();
  return (
    <header>
      <div className="header-wrapper">
        <div className="logo_middle_section">
          <div className="logo-section">
            <a href="/safes" className="logo-link">
            <img src={Logo} alt="img"  className="logo" />
            <span className="T-VAULT">T-VAULT</span></a>
          </div>
          <ul className="middle-section">
            {headerNav.map((nav, i) => {
              return (
                <li
                  className={location.pathname == nav.path ? "nav-active" : ""}
                >
                  <Link to={`${nav.path}?name=${nav.text}&id=${i}`}>
                    {nav.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="right-section">
          <span>Documentation</span>
          <span>(Admin) Davis R.</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
