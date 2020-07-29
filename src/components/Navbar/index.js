import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import { Header, NavContainer, NavItem } from "./style";

import logo from "../../assets/logo.png";

function Navbar() {
  return (
    <Header>
      <Link to="/">
        <img className="logo" src={logo} alt="techflix logo" />
      </Link>
      <NavContainer>
        <NavItem className="nav-item">
          <Button as={Link} to="/cadastro/video" shadow primary>
            Novo vídeo
          </Button>
        </NavItem>
      </NavContainer>
    </Header>
  );
}

export default Navbar;
