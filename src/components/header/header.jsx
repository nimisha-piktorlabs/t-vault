import React from "react";
import Logo from "../../assets/images/logo.png";
import "./header.css";
function Header() {
  return (
    <header>
      <div className="header-wrapper">
        <div className="logo_middle_section">
          <div className="logo-section">
            <img src={Logo} alt="img" srcset="" className="logo" />
            <span class="T-VAULT">T-VAULT</span>
          </div>
          <ul className="middle-section">
            <li>Safes</li>
            <li>Vault AppRoles</li>
            <li>Service Accounts</li>
            <li>IAM Service Accounts</li>
            <li>Azure Active Directory</li>
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
