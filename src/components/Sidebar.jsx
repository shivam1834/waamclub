import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import MenuItemForFranchise from './utiils/MenuItemForFranchise';
import menuItem from './utiils/menuItems'
import MenuItemForVendor from './utiils/MenuItemForVendor'

const Sidebar = ({ children, Roles }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  const role = JSON.parse(window.localStorage.getItem('roles'));
  console.log(role)

  return (
    <div className="container">
      <div style={{ width: isOpen ? "250px" : "60px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Logo
          </h1>
          <div
            style={{ marginLeft: isOpen ? "100px" : "0px" }}
            className="bars"
          >
            <FaBars onClick={toggle} />
          </div>
          
        </div>
        {role === 1 ? <React.Fragment>
          {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
        </React.Fragment> : role === 2 ? <React.Fragment>
        {MenuItemForFranchise.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
        </React.Fragment> : role === 4 ? <React.Fragment>
        {MenuItemForVendor.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
        </React.Fragment> : ''}
        
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
