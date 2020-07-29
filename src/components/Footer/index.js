import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FooterBase, ContainerSocial } from "./styles";

function Footer() {
  return (
    <FooterBase>
      <p>MARVEL</p>
      <ContainerSocial>
        <a
          href="https://github.com/mannoeu"
          rel="noreferrer noopener"
          target="_blank"
        >
          <FaGithub /> Github
        </a>
        <a
          href="https://www.linkedin.com/in/emmanuel-messias-535621127/"
          rel="noreferrer noopener"
          target="_blank"
        >
          <FaLinkedin /> Linkedin
        </a>
      </ContainerSocial>
    </FooterBase>
  );
}

export default Footer;
