import React from "react";

function PasswordChange() {
  return (
    <div>
      <div className="basic-info">
        <div>
          <p>Current password:</p>
          <input className="basic-input" />
        </div>
        <div>
          <p>New password:</p>
          <input className="basic-input" />
        </div>
      </div>

      <div className="basic-info">
        <div>
          <p>Confirm new password:</p>
          <input className="basic-input" />
        </div>
      </div>
      <div className="info-tab">
        <button className="main-btn">Save Changes</button>
      </div>
    </div>
  );
}

export default PasswordChange;
