import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Video from "./pages/Cadastro/Video";
import Categoria from "./pages/Cadastro/Categoria";
import NotFound from "./pages/NotFound";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cadastro/video" component={Video} />
        <Route path="/cadastro/categoria" component={Categoria} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
