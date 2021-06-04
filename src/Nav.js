import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/1/15/Logonfx.png"
        alt="Netflix logo"
      />

      <img
        className="nav__avtar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="avatar"
      />
    </div>
  );
}

export default Nav;
