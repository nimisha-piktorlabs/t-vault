import React from "react";
import Logo from "../../assets/images/logo.png";
import "./header.css";
import { Link } from "react-router-dom";
function Header() {
  const headerNav = [
    { text: "Safes", path: "/safe" },
    { text: "Vault AppRoles", path: "/vault" },
    { text: "Service Accounts", path: "/service" },

    { text: "IAM Service Accounts", path: "/iam" },
    { text: "Azure Active Directory", path: "/azure" },

    // "Service Accounts",
    // ,
    // "Azure Active Directory",
  ];
  return (
    <header>
      <div className="header-wrapper">
        <div className="logo_middle_section">
          <div className="logo-section">
            <img src={Logo} alt="img" srcset="" className="logo" />
            <span class="T-VAULT">T-VAULT</span>
          </div>
          <ul className="middle-section">
            {headerNav.map((nav, i) => {
              return (
                <li>
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
