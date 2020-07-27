import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  padding: calc(var(--sm) * 2) calc(var(--lg) * 2);
  z-index: 100;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  background: var(--darker);
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.12);

  @media (max-width: 800px) {
    & {
      justify-content: center;
    }
  }

  & > a > img {
    max-width: 160px;

    @media (max-width: 800px) {
      img {
        width: 105px;
      }
    }
  }
`;

export const NavContainer = styled.div`
  @media (max-width: 800px) {
    & {
      position: fixed;
      right: 10px;
      bottom: 10px;
      text-align: center;
    }
  }
`;

export const NavItem = styled.li`
  list-style: none;
  border: none;

  @media (max-width: 800px) {
    & {
      background: var(--darker);

      & > a {
        border: none;
      }
    }
  }
`;
