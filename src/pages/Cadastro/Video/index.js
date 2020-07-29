import React from "react";
import { Link } from "react-router-dom";
import Default from "../../Default";

import "../styles";

function Video() {
  return (
    <Default>
      <h1>Videos</h1>

      <Link to="/cadastro/categoria">Cadastrar categoria</Link>
    </Default>
  );
}

export default Video;
