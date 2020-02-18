import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Main } from "./components/mainPage/";
import { Article } from "./components/article/";
import { ArticleEditor } from "./components/articleEditor/";

const history = createBrowserHistory();

export const BaseRouter = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/articles/:id" component={Article} />
      <Route exact path="/articles/:id/edit" component={ArticleEditor} />
    </Switch>
  </Router>
);

export default BaseRouter;
