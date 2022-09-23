import React from "react";
import { Route, BrowserRouter,Switch } from "react-router-dom";

import wordIndex from "./wordIndex";
import SessionNew from "./SessionNew";

export const App = (props) => {
  return (
    <div>
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={wordIndex} />
      <Route exact path="/sessions/new" component={SessionNew} />
    </Switch>
    </BrowserRouter>
    </div>
  );
};
export default App;
