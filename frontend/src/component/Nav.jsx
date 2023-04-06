import React from "react";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div className="navbar">
      <Link to={"/"}>
        <div>Home</div>
      </Link>
      <Link to={"/display"}>
        <div>All data</div>
      </Link>
    </div>
  );
}

export default Nav;
