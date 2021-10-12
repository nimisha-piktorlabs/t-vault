import React from "react";
import "./vault.css";
import Sidenav from "../../components/sideNav/sideNav.component";
import { useLocation } from "react-router-dom";

function VaultPage() {
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  let query = useQuery();
  let pageName = query.get("name");
  let seconddata = query.get("id");
  return (
    <div className="page-wrapper">
      <Sidenav>
        <div>{pageName} </div>
        <div>{seconddata} </div>
      </Sidenav>
    </div>
  );
}

export default VaultPage;
