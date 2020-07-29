import React, { useState, useEffect } from "react";

import Default from "../Default";
import BannerMain from "../../components/BannerMain";
import Carousel from "../../components/Carousel";
import Loading from "../../components/Loading";

import data from "../../data/application.json";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2200);
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <Default>
      <BannerMain
        name={data.heroes[0].name}
        url={data.heroes[0].url}
        videoDescription={data.heroes[0].alterEgo}
        imagePath={data.heroes[0].imagePath}
      />
      {data.heroes?.map((hero) => (
        <Carousel hero={hero} />
      ))}
      {data.villains?.map((villain) => (
        <Carousel hero={villain} />
      ))}
      {data.aliens?.map((alien) => (
        <Carousel hero={alien} />
      ))}
      {data.antiHeroes?.map((antiHero) => (
        <Carousel hero={antiHero} />
      ))}
      {data.humans?.map((human) => (
        <Carousel hero={human} />
      ))}
    </Default>
  );
}

export default Home;
