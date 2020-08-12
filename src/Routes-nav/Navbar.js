import React from "react";
import { useHistory } from "react-router-dom";
import { Nav, NavItem, NavLink } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import Reward from "react-rewards";

function Navbar() {
  const history = useHistory();
  let reward;
  function handleClick(url) {
    reward.rewardMe();
    setTimeout(function () {
      history.push(url);
    }, 1000);
  }
  return (
    <div className="Navbar">
      <Nav>
        <Reward
          ref={(ref) => {
            reward = ref;
          }}
          type="confetti"
        >
          <NavItem>
            <NavLink href="#" onClick={() => handleClick("/")}>home</NavLink>
          </NavItem>
        </Reward>
        <Reward
          ref={(ref) => {
            reward = ref;
          }}
          type="confetti"
        >
          <NavItem>
            <NavLink href="#" onClick={() => handleClick("/about")}>about</NavLink>
          </NavItem>
        </Reward>
        <Reward
          ref={(ref) => {
            reward = ref;
          }}
          type="confetti"
          config={{
            springAnimation: false
          }}
        >
          <NavItem>
            <NavLink href="#" onClick={() => handleClick("/georgie")}>
              <FontAwesomeIcon icon={faPaw}></FontAwesomeIcon>
            </NavLink>
          </NavItem>
        </Reward>
      </Nav>
    </div>
  );
}

export default Navbar;
