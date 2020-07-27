import React from "react";

import spinner from "../../assets/loading.svg";
import { Container, Spinner } from "./styles";

function Loading() {
  return (
    <Container>
      <Spinner>
        <img src={spinner} alt="Loading" />
      </Spinner>
    </Container>
  );
}

export default Loading;
