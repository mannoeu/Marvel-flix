import styled from "styled-components";

export const Button = styled.a`
  display: block;
  color: ${(props) => (props.primary ? "var(--primary)" : "var(--dark);")};
  background: ${(props) => (props.primary ? "var(--color)" : "var(--primary)")};
  padding: var(--sm) var(--md);
  outline: none;
  transition: background 0.2s ease-out, color 0.2s ease-in;
  font-size: 14px;
  cursor: pointer;

  display: grid;
  place-items: center;

  width: 140px;

  &:hover,
  &:focus {
    background: ${(props) =>
      props.primary ? "var(--primary)" : "var(--color)"};
    color: ${(props) => (props.primary ? "var(--dark)" : "var(--primary)")};
  }
`;
