import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Nav.css";
import ReorderIcon from "@material-ui/icons/Reorder";

function Nav() {
  const [expandNav, setExpandNav] = useState(false);

  const local = useLocation();

  useEffect(() => {
    setExpandNav(false);
  }, [local]);

  return (
    <div className="navbar" id={expandNav ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNav((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/projects"> Projects </Link>
        <Link to="/experience"> Experience </Link>
      </div>
    </div>
  );
}

export default Nav;