import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 70vh;
  display: grid;
  place-items: center;
`;

export const Spinner = styled.div`
  img {
    width: 40px;
    height: 40px;
    animation: spinner 0.7s linear infinite;
    transform-origin: center center;

    @keyframes spinner {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;
