import React from "react";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";

function SideWithNav() {
  return (
    <div>
      <Sidebar />
      <NavBar />
    </div>
  );
}

export default SideWithNav;
