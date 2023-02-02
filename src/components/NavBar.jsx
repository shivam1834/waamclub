import React from "react";
import { BiSearch } from "react-icons/bi";
import Notification from "./Notification";
import MenuItem from "./MenuItem";

function NavBar(props) {
  return (
    <div className="nav-bar">
      <div>
        <p>Pages / {props.page}</p>
        <h1>{props.page}</h1>
      </div>
      <div>
        <div className="right-nav">
          <BiSearch />
          <input placeholder="Search..." className="searchTerm" />
          <Notification />
          <MenuItem />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
