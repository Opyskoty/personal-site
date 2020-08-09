import React from "react";
import { Nav, NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import "./Navbar.css"

function Navbar(){
  return (
    <div className="Navbar">
      <Nav pullRight>
        <NavItem>
          <NavLink href="#">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#"><FontAwesomeIcon icon={faPaw}></FontAwesomeIcon></NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default Navbar;