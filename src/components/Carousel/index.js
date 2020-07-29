import React from "react";
import Slider from "./Slider";
import { SliderItem } from "./Slider/styles";

import {
  VideoCardGroupContainer,
  TitleContainer,
  Title,
  ExtraLink,
} from "./styles";
import VideoCard from "../VideoCard";

function Carousel({ ignoreFirstVideo, hero }) {
  const name = hero.name;
  const alterEgo = hero.alterEgo;
  const video = hero.url;
  const movies = hero.movies;

  return (
    <VideoCardGroupContainer>
      {name && (
        <TitleContainer>
          <Title>{name}</Title>
          {alterEgo && (
            <ExtraLink href={video} target="_blank">
              {alterEgo}
            </ExtraLink>
          )}
        </TitleContainer>
      )}
      <Slider>
        {movies.map((movie, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={movie.id}>
              <VideoCard movie={movie.img} />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}

export default Carousel;
