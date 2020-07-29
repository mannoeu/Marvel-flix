import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 70vh;
  display: grid;
  place-items: center;
  overflow: hidden;
  position: relative;
`;

export const NotFoundTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: var(--color);

  h1 {
    font-size: calc(var(--lg) * 2);
  }
  p {
    font-size: calc(var(--md) / 2);
    text-transform: lowercase;
    letter-spacing: 0.07rem;
    margin-bottom: var(--md);
  }
`;
