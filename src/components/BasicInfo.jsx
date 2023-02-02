import React from "react";

function BasicInfo() {
  return (
    <div>
      <div className="basic-info">
        <div>
          <p>First Name</p>
          <input className="basic-input" placeholder="Sagar" />
        </div>
        <div>
          <p>Last Name</p>
          <input className="basic-input" placeholder="Nirwal" />
        </div>
      </div>

      <div className="basic-info">
        <div>
          <p>Phone</p>
          <input className="basic-input" placeholder="+91 8500500500" />
        </div>
        <div>
          <p>Email Address</p>
          <input className="basic-input" placeholder="xyz@gmail.com" />
        </div>
      </div>

      <div className="basic-info">
        <div>
          <p>Country</p>
          <input className="basic-input" placeholder="India" />
        </div>
        <div>
          <p>State</p>
          <input className="basic-input" placeholder="Maharashtra" />
        </div>
      </div>

      <div className="basic-info">
        <div>
          <p>City</p>
          <input className="basic-input" placeholder="Mumbai" />
        </div>
        <div>
          <p>Zip Code</p>
          <input className="basic-input" placeholder="230532" />
        </div>
      </div>

      <div className="info-tab">
        <p>Address</p>
        <textarea
          rows={5}
          className="basic-input"
          placeholder="03 My Area Name Nearby Mumbai"
        ></textarea>
        <div>
          <button className="main-btn">Save Changes</button>
        </div>
      </div>
    </div>
  );
}

export default BasicInfo;
