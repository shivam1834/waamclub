import React from "react";
import { FiUpload } from "react-icons/fi";

function Message() {
  return (
    <div className="message">
      <div className="mess-icon">
        <FiUpload />
      </div>
      <div className="mess-text">
        <h4>New Update: Waam Club Dashboard</h4>
        <p>A New Update for your Download Item</p>
      </div>
    </div>
  );
}
export default Message;
