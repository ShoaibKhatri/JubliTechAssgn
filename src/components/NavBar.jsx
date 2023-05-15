import React from "react";
import { Nav } from "react-bootstrap";
import Logo from "../assets/images/Logo.png";
import "../assets/css/navbar.css";

const NavBar = () => {
  return (
    <div className="container-fluid navbar-main">
      <Nav variant="pills" defaultActiveKey="/">
        <Nav.Item>
          <Nav.Link href="/">HOME</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="aboutus">ABOUT US</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="portfolio">PORTFOLIO</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <img src={Logo} className="logo-image" alt="" />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="team">TEAM</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="blog">BLOG</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="contact">CONTACT</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default NavBar;
