import React from "react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { Main } from "./styles";

function Default({ children }) {
  return (
    <>
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}

export default Default;
