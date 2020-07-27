import React, { useState, useEffect } from "react";

import dadosIniciais from "./data/dados_iniciais.json";
import Navbar from "./components/Navbar";
import BannerMain from "./components/BannerMain";
import Carousel from "./components/Carousel";
import Loading from "./components/Loading";

function App() {
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
    <div>
      <Navbar />
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"inspiration"}
      />
      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />
      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[1]} />
      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[2]} />
      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[3]} />
      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[4]} />
      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[5]} />
    </div>
  );
}

export default App;
