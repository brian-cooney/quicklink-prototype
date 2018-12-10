import React from "react";
import { Link } from "@reach/router";

import "./NavBar.css";

const NavBar = () => {
  return (
    <header className="header">
      <h1 className="logo">
        <a href="#">QuickLinks</a>
      </h1>
      <ul className="main-nav">
        <li>
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/gridtest">
            Cards
          </Link>
        </li>
        <li>
          <Link className="link" to="/editform">
            Editform
          </Link>
        </li>
        <li>
          <Link className="link" to="/formik">
            Formik
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
