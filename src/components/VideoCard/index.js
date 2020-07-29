import React from "react";
import { VideoCardContainer } from "./styles";

function VideoCard({ movie }) {
  return (
    <VideoCardContainer>
      <img src={movie} alt="Thumbnail" />
    </VideoCardContainer>
  );
}

export default VideoCard;
