import React from "react";

import Sidenav from "../../components/sideNav/sideNav.component";
import { useLocation } from "react-router-dom";

function ServiceAcountPage() {
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  let query = useQuery();
  let firstdata = query.get("name");
  let seconddata = query.get("id");
  return (
    <div className="page-wrapper">
      <Sidenav>
        <div>{firstdata} </div>
        <div>{seconddata} </div>
      </Sidenav>
    </div>
  );
}

export default ServiceAcountPage;
