import React from "react";
import BasicInfo from "../components/BasicInfo";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import PasswordChange from "../components/PasswordChange";

function Profile() {
  const [toggleState, setToggleState] = useState(true);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div>
      <div className="profile">
        <Paper elevation={1} className="profile">
          <div className="profile-nav">
            <span
              className={toggleState === true ? "tabsactive-tabs" : null}
              onClick={() => {
                toggleTab(true);
              }}
            >
              Personal Details
            </span>
            <span
              className={toggleState === false ? "tabsactive-tabs" : null}
              onClick={() => {
                toggleTab(false);
              }}
            >
              Change Password
            </span>
          </div>
          {toggleState ? <BasicInfo /> : <PasswordChange />}
        </Paper>
      </div>
    </div>
  );
}

export default Profile;
