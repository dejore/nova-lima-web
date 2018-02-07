import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Adiantamento from "./../components/Adiantamento";
import Header from "./../components/Header";
import NotFoundPage from "./../components/NotFoundPage";
const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Adiantamento} />
        <Route path="/adiantamento" component={Adiantamento} />
        <Route path="/vale-feira" component={NotFoundPage} />
        <Route path="/vale-gas" component={NotFoundPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);
export default AppRouter;
