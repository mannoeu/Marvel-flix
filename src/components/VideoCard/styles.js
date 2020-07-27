import styled from "styled-components";

export const VideoCardContainer = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 160px;
  overflow: hidden;
  background: red;

  position: relative;
  display: flex;
  align-items: flex-end;

  opacity: 0.7;
  transition: opacity 0.3s;
  &:hover,
  &:focus {
    opacity: 1;
  }

  &:not(:first-child) {
    margin-left: 20px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);

    &:hover {
      transform: scale(1.07);
    }
  }
`;
