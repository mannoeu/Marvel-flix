import styled from "styled-components";

export const FooterBase = styled.footer`
  background: var(--dark);
  padding: var(--md) var(--lg) var(--sm);
  color: var(--light);
  text-align: center;
  flex: 1;
  letter-spacing: 2px;
`;

export const ContainerSocial = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 300px;

  margin: var(--md) calc(var(--lg) * 2);

  a:not(:last-child) {
    margin-bottom: var(--md);
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;

    transition: color 0.2s cubic-bezier(0.77, 0, 0.175, 1);
    font-size: 14px;

    &:hover {
      color: var(--secondary);
    }
    svg {
      margin-right: var(--sm);
    }
  }
`;
