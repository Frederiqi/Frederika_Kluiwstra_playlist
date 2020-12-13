import React from "react";
import { Link } from "react-router-dom";

function Nav() {

  const navStyle = {
    textDecoration: "none",
    color: "rgb(46, 52, 139)"
  }

  return (
    <div className="nav">
      <Link style={navStyle} to="/">
        <h1 className="nav_home">Playlist Creator</h1>
      </Link>
      <Link style={navStyle} className="about_link" to="../About">
        <h1 className="nav_about">About this app</h1>
      </Link>
    </div>
  );
}

export default Nav;