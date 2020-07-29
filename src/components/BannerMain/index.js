import React from "react";
import VideoIframeResponsive from "../VideoIframeResponsive";
import { Button } from "../Button";
import { BannerMainContainer, ContentAreaContainer } from "./styles";

function getYouTubeId(youtubeURL) {
  return youtubeURL.replace(
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
    "$7"
  );
}

export default function BannerMain({ name, alterEgo, imagePath, url }) {
  const youTubeID = getYouTubeId(url);

  return (
    <BannerMainContainer backgroundImage={imagePath}>
      <ContentAreaContainer>
        <ContentAreaContainer.Item>
          <ContentAreaContainer.Title>{name}</ContentAreaContainer.Title>

          <ContentAreaContainer.Description>
            {alterEgo}
          </ContentAreaContainer.Description>
        </ContentAreaContainer.Item>

        <ContentAreaContainer.Item>
          <VideoIframeResponsive youtubeID={youTubeID} />
          <Button>Assistir</Button>
        </ContentAreaContainer.Item>
      </ContentAreaContainer>
    </BannerMainContainer>
  );
}
