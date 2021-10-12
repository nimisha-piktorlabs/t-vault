import React from "react";
import "./safes.component.css";

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
