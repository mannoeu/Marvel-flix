import React from "react";
import logo from "../../assets/logo.png";

import { Button } from "../Button";
import { Header, NavContainer, NavItem } from "./style";

function Navbar() {
  return (
    <Header>
      <a href="/">
        <img className="logo" src={logo} alt="techflix logo" />
      </a>
      <NavContainer>
        <NavItem className="nav-item">
          <Button path="/" shadow>
            Novo vídeo
          </Button>
        </NavItem>
      </NavContainer>
    </Header>
  );
}

export default Navbar;
