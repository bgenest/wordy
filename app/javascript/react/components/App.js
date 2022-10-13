import React from "react";
import { Route, BrowserRouter,Switch } from "react-router-dom";

import wordIndex from "./wordIndex";
import SessionNew from "./SessionNew";
import DailyNew from "./DailyNew";

export const App = (props) => {
  return (
    <div>
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={wordIndex} />
      <Route exact path="/sessions/new" component={SessionNew} />
      <Route exact path="/games/daily" component={DailyNew} />
    </Switch>
    </BrowserRouter>
    </div>
  );
};
export default App;
