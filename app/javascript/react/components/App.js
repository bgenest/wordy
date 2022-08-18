import React from "react";
import { Route, BrowserRouter,Switch } from "react-router-dom";

import WordIndex from "./WordIndex";
import SessionNew from "./SessionNew";

export const App = (props) => {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={WordIndex} />
      <Route exact path="/sessions/new" component={SessionNew} />
    </Switch>
    </BrowserRouter>
  );
};
export default App;
