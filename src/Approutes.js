import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Header } from "./componentes/HeaderCom/Header";

import app from "./componentes/ListCom/List";
import details from "./componentes/CardDeatils/Details";
import Fail from "./componentes/FailCom/Fail";

function Routes() {
  return (
    
    <BrowserRouter>
     <Header />
      <Switch>
        <Route exact path="/personajes" component={app} />
        <Route exact path="/personajes/detalles" component={details} />
        <Route exact path="/" component={app} /> 
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
