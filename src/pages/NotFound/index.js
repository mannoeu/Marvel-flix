import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";

import { Container, NotFoundTitle } from "./styles";

function NotFound() {
  return (
    <Container>
      <NotFoundTitle>
        <h1>404</h1>
        <p>Essa página não existe</p>
        <Button as={Link} to="/">
          Voltar
        </Button>
      </NotFoundTitle>
    </Container>
  );
}

export default NotFound;
