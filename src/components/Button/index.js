import styled from "styled-components";

export const Button = styled.a`
  display: block;
  color: var(--primary);
  border: 1px solid var(--secondary);
  padding: var(--sm) var(--md);
  outline: none;
  transition: background 0.2s ease-out, color 0.2s ease-in;
  font-size: 14px;
  cursor: pointer;

  &:hover,
  &:focus {
    background: var(--primary);
    color: var(--darker);
  }
`;
