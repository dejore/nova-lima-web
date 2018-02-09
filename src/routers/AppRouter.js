import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CalculoAdiantamento from "./../components/CalculoAdiantamento";
import Header from "./../components/Header";
import NotFoundPage from "./../components/NotFoundPage";
import ValeGas from "./../components/ValeGas";
import ValeFeira from "./../components/ValeFeira";
import DashboardInicial from "./../components/DashboardInicial";
const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={DashboardInicial} />
        <Route path="/adiantamento" component={CalculoAdiantamento} />
        <Route path="/vale-feira" component={ValeFeira} />
        <Route path="/vale-gas" component={ValeGas} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);
export default AppRouter;
