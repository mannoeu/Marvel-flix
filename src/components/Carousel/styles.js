import styled from "styled-components";

export const Title = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  letter-spacing: 0.06rem;
  display: inline-block;
  line-height: 1;
  border-radius: 4px;

  @media (max-width: 800px) {
    font-size: 20px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: var(--md) 0;
`;

export const ExtraLink = styled.a`
  text-decoration: none;
  transition: opacity 0.3s;
  font-size: 14px;
  letter-spacing: 0.08rem;
  color: var(--light);
  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;

export const VideoCardList = styled.ul`
  margin: 0;
  padding: 0 var(--sm) var(--md) 0;
  list-style: none;
  display: flex;
  overflow-x: auto;
  flex-direction: row;

  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;

  ::-webkit-scrollbar {
    background: var(--darker);
    height: 8px;
    border-radius: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background: var(--secondary);
    height: 8px;
    border-radius: 8px;
  }

  li {
    margin-right: 16px;
    scroll-snap-align: start;
  }
`;

export const VideoCardGroupContainer = styled.section`
  color: white;
  min-height: 197px;
  margin-left: 5%;
  margin-bottom: 16px;
`;
