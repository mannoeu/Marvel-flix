import React from "react";
import { Link } from "react-router-dom";
import Default from "../../Default";

import { Button } from "../../../components/Button";

import "../styles";

function Categoria() {
  return (
    <Default>
      <h1>Categorias</h1>
      <form>
        <label>
          Nome da Categoria:
          <input type="text" />
        </label>
        <Button primary>Cadastrar</Button>
      </form>
      <Link to="/">Home</Link>
    </Default>
  );
}

export default Categoria;
