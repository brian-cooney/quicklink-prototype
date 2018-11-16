import React from "react";
import { Flex, Box, Text, link, Card, Image, Button, Heading } from "rebass";

const FlexBox = () => {
  return (
    <nav className="navbar">
      <span class="navbar-toggle" id="js-navbar-toggle">
        <i class="fas fa-bars" />
      </span>
      <a href="" className="logo">
        Logo
      </a>
      <ul className="main-nav">
        <li>
          <a href="#" className="nav-links">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="nav-links">
            Products
          </a>
        </li>
        <li>
          <a href="#" className="nav-links">
            About
          </a>
        </li>
        <li>
          <a href="#" className="nav-links">
            Contact
          </a>
        </li>
        <li>
          <a href="#" className="nav-links">
            Blog
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default FlexBox;
