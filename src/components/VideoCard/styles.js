import styled from "styled-components";

export const VideoCardContainer = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: white;
  outline: none;

  position: relative;
  display: flex;
  align-items: flex-end;

  opacity: 0.7;
  transition: opacity 0.3s;

  width: 280px;
  height: 460px;

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
    transition: all 0.2s cubic-bezier(0.77, 0, 0.175, 1);

    &:hover {
      transform: scale(1.06) translateY(-20px);
    }
  }
`;
